// src/models/StringDetail.ts
import { StringRating } from './Rating';

export interface StringDetail {
    Name: string;
    Material?: string;
    Duralibity?: string;
    Power?: string;
    Control?: string;
    Spin?: string;
    Feel?: string;
    Comfort?: string;
    BestFor?: string;
    Ratings?: StringRating[];
}
