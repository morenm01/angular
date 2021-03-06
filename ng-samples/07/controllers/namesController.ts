
module Lesson07 {

    export class HeroesController {
        static $inject = [
            "heroesService",
            "maxElements",
            "$log"
        ];

        public people: Hero[];

        constructor(private heroesService: SuperHeroesService,
                    private max: number,
                    private $log: ng.ILogService) {

            heroesService.getHeroes()
                .then((heroes: Hero[]) => {
                    this.people = heroes;
                })
                .catch(() => {
                    console.log("Error!!");
                });

        }

        addName (newName: string) {
            if(this.people.length < this.max)
                this.heroesService.addHero(newName);
            else
                this.$log.debug("No puedes añadir más elementos")
        }

        addRandom ()  {
            this.addName(this.heroesService.getRandomHero().name);
        }
    }
}