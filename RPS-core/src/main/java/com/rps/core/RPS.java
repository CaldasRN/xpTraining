package com.rps.core;

import static com.rps.core.Outcome.*;
import static com.rps.core.Throw.*;

public class RPS {

    public static Outcome play(Throw p1, Throw p2) {
        if (p1 == p2)
            return TIE;

        if (p1 == SPOCK && p2 == LIZARD
                || p1 == LIZARD && p2 == ROCK
                || p1 == ROCK && p2 == SPOCK)
            return P1_WINS;

        return P2_WINS;
    }

}