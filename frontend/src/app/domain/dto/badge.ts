export class Badge implements app.domain.dto.IBadge, Serializable<Badge> {
    id: string;
    name: string;
    thumbnail: string;
    image: string;
    description: string;
    timesEarned: number;
    canEarnMultipleTimes: boolean;

    deserialize(input: any): Badge {
        this.id = input.id;
        this.name = input.name;
        this.thumbnail = input.thumbnail;
        this.image = input.image;
        this.canEarnMultipleTimes = input.canEarnMultipleTimes;
        this.description = input.description;
        return this;
    }
}