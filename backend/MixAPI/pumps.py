import time
from threading import Lock

from Mix.settings import HARDWARE_ENABLED

if HARDWARE_ENABLED:
    import RPi.GPIO as GPIO

usleep = lambda x: time.sleep(x/1000000.0)

ENABLE_PIN = 17
DIRECTION_PIN = 4
PULSE_PIN = 26
CRITICAL_DELAY = 500  # Microseconds
MAX_SPEED = 650  # Microseconds per step
RAMP_START = 2000
RAMP_STEPS = 400

DATA = 5
RESET = 6
CLOCK = 12
LATCH = 13
OUTPUT_ENABLE = 16

LOCK = Lock()

def init():
    if not HARDWARE_ENABLED:
        return

    GPIO.setmode(GPIO.BCM)

    GPIO.setup(ENABLE_PIN, GPIO.OUT, initial=GPIO.HIGH)  # Enable
    GPIO.setup(DIRECTION_PIN, GPIO.OUT)  # Direction
    GPIO.setup(PULSE_PIN, GPIO.OUT)  # Pulse

    GPIO.setup(DATA, GPIO.OUT)  # Data
    GPIO.setup(RESET, GPIO.OUT)  # Reset
    GPIO.setup(CLOCK, GPIO.OUT)  # Clk
    GPIO.setup(LATCH, GPIO.OUT)  # Latch
    GPIO.setup(OUTPUT_ENABLE, GPIO.OUT)  # OE


def pump(milliliters, pump_obj):
    global lock

    if not HARDWARE_ENABLED:
        return

    if not LOCK.acquire(False):
        return

    if pump_obj is None:
        return

    try:
        _set_pump(pump_obj.pin)

        steps = abs(milliliters)

        ramp_up = False
        if steps > RAMP_STEPS:
            steps = steps - RAMP_STEPS
            ramp_up = True

        ramp_down = False
        if steps > RAMP_STEPS:
            steps = steps - RAMP_STEPS
            ramp_down = True

        # Enable the motor
        if milliliters > 0:
            GPIO.output(DIRECTION_PIN, GPIO.HIGH)
        else:
            GPIO.output(DIRECTION_PIN, GPIO.LOW)

        GPIO.output(ENABLE_PIN, GPIO.LOW)

        usleep(CRITICAL_DELAY)

        if ramp_up:
            _ramp_up()

        speed = RAMP_START
        if ramp_up:
            speed = MAX_SPEED

        for i in range(steps):
            _step(speed)

        if ramp_down:
            _ramp_down()

        usleep(CRITICAL_DELAY)

        GPIO.output(ENABLE_PIN, GPIO.HIGH)

        _clear()
    finally:
        LOCK.release()

def _step(delay):
    GPIO.output(PULSE_PIN, GPIO.HIGH)
    usleep(delay)
    GPIO.output(PULSE_PIN, GPIO.LOW)
    usleep(delay)

def _set_pump(pid):
    # We only have 24 pumps
    if pid > 24:
        return

    _clear()

    for i in reversed(range(24)):
        if i == pid:
            GPIO.output(DATA, GPIO.HIGH)
        else:
            GPIO.output(DATA, GPIO.LOW)

        usleep(CRITICAL_DELAY)

        GPIO.output(CLOCK, GPIO.HIGH)

        usleep(CRITICAL_DELAY)

        GPIO.output(CLOCK, GPIO.LOW)
        GPIO.output(DATA, GPIO.LOW)

        usleep(CRITICAL_DELAY)

    GPIO.output(LATCH, GPIO.HIGH)

    usleep(CRITICAL_DELAY)

    GPIO.output(LATCH, GPIO.LOW)

    usleep(CRITICAL_DELAY)

    GPIO.output(OUTPUT_ENABLE, GPIO.HIGH)

def _clear():
    GPIO.output(OUTPUT_ENABLE, GPIO.LOW)
    GPIO.output(CLOCK, GPIO.LOW)
    GPIO.output(LATCH, GPIO.LOW)
    GPIO.output(RESET, GPIO.LOW)
    GPIO.output(DATA, GPIO.LOW)

    usleep(CRITICAL_DELAY)

    GPIO.output(RESET, GPIO.HIGH)

    usleep(CRITICAL_DELAY)

    GPIO.output(RESET, GPIO.LOW)

def _ramp_eq(var, steps, ramp_start, ramp_end):
    return ((ramp_end - ramp_start) / steps) * var + ramp_start

def _ramp_up():
    for i in range(RAMP_STEPS):
        _step(_ramp_eq(i, RAMP_STEPS, RAMP_START, MAX_SPEED))

def _ramp_down():
    for i in range(RAMP_STEPS):
        _step(_ramp_eq(i, RAMP_STEPS, MAX_SPEED, RAMP_START))
