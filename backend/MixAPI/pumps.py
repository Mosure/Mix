import time

from Mix.settings import HARDWARE_ENABLED

if HARDWARE_ENABLED:
    import RPi.GPIO as GPIO

usleep = lambda x: time.sleep(x/1000000.0)

ENABLE_PIN = 5
DIRECTION_PIN = 6
PULSE_PIN = 13
CRITICAL_DELAY = 1000  # Microseconds

def init():
    if not HARDWARE_ENABLED:
        return

    GPIO.setmode(GPIO.BCM)

    GPIO.setup(ENABLE_PIN, GPIO.OUT)  # Enable
    GPIO.setup(DIRECTION_PIN, GPIO.OUT)  # Direction
    GPIO.setup(PULSE_PIN, GPIO.OUT)  # Pulse

def pump(milliliters):
    if not HARDWARE_ENABLED:
        return

    steps = abs(milliliters)

    # Enable the motor
    if milliliters > 0:
        GPIO.output(DIRECTION_PIN, GPIO.HIGH)
    else:
        GPIO.output(DIRECTION_PIN, GPIO.LOW)

    GPIO.output(ENABLE_PIN, GPIO.LOW)

    usleep(CRITICAL_DELAY)

    for i in range(steps):
        _step()
    
    usleep(CRITICAL_DELAY)

    GPIO.output(ENABLE_PIN, GPIO.HIGH)

def _step():
    GPIO.output(PULSE_PIN, GPIO.HIGH)
    usleep(CRITICAL_DELAY)
    GPIO.output(PULSE_PIN, GPIO.LOW)
    usleep(CRITICAL_DELAY)
