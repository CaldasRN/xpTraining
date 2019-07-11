import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameGateway, PlayPracticeGameRequest, PlayPracticeGameResponse, PlayGameRequest } from './game.gateway';
import { GameResult, Player } from './game';
import { Observable } from 'rxjs';

@Injectable()
export class HttpGameGateway implements GameGateway {
  constructor( private http: HttpClient ) { }

  playPracticeGame(request: PlayPracticeGameRequest ): Observable<PlayPracticeGameResponse> {
    return this.http.post<PlayPracticeGameResponse>( 'http://localhost:8080/api/gameResults/practice', request );
  }

  playGame(request: PlayGameRequest ): Observable<GameResult> {
    return this.http.post<GameResult>( 'http://localhost:8080/api/gameResults', request );
  }

  getPlayers(): Observable<Player>{
    return this.http.get<Player>( 'http://localhost:8080/api/gameResults/playerList' );
  }
}