import time

from Mix.settings import HARDWARE_ENABLED

if HARDWARE_ENABLED:
    import RPi.GPIO as GPIO

usleep = lambda x: time.sleep(x/1000000.0)

ENABLE_PIN = 5
DIRECTION_PIN = 6
PULSE_PIN = 13
CRITICAL_DELAY = 500  # Microseconds
MAX_SPEED = 600  # Microseconds per step
RAMP_START = 2000

def init():
    if not HARDWARE_ENABLED:
        return

    GPIO.setmode(GPIO.BCM)

    GPIO.setup(ENABLE_PIN, GPIO.OUT, initial=GPIO.HIGH)  # Enable
    GPIO.setup(DIRECTION_PIN, GPIO.OUT)  # Direction
    GPIO.setup(PULSE_PIN, GPIO.OUT)  # Pulse

def pump(milliliters):
    if not HARDWARE_ENABLED:
        return

    steps = abs(milliliters)

    ramp_up = False
    if steps > 200:
        steps = steps - 200
        ramp_up = True
    
    ramp_down = False
    if steps > 200:
        steps = steps - 200
        ramp_down = True

    # Enable the motor
    if milliliters > 0:
        GPIO.output(DIRECTION_PIN, GPIO.HIGH)
    else:
        GPIO.output(DIRECTION_PIN, GPIO.LOW)

    GPIO.output(ENABLE_PIN, GPIO.LOW)

    usleep(CRITICAL_DELAY)

    if ramp_up:
        _ramp_up()  # Does 200 steps

    speed = RAMP_START
    if ramp_up:
        speed = MAX_SPEED

    for i in range(steps):
        _step(speed)
    
    if ramp_down:
        _ramp_down()  # Does 200 steps
    
    usleep(CRITICAL_DELAY)

    GPIO.output(ENABLE_PIN, GPIO.HIGH)

def _step(delay):
    GPIO.output(PULSE_PIN, GPIO.HIGH)
    usleep(delay)
    GPIO.output(PULSE_PIN, GPIO.LOW)
    usleep(delay)

def _ramp_eq(x, steps, ramp_start, ramp_end):
    return ((ramp_end - ramp_start) / steps) * x + ramp_start

def _ramp_up():
    for i in range(200):
        _step(_ramp_eq(i, 200, RAMP_START, MAX_SPEED))

def _ramp_down():
    for i in range(200):
        _step(_ramp_eq(i, 200, MAX_SPEED, RAMP_START))
