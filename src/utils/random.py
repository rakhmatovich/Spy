import random
import sys

def randomList(array):
    return random.shuffle(array)

sys.stdout.flush()

if __name__ == "__main__":
    randomList(sys.argv[1])