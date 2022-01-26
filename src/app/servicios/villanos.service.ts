import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private villanos: Villano [] = [
    {
      nombre: "Flash Reverso",
      bio: "El gran y clásico villano de la mitología de Flash, este tipo tiene los poderes de la Fuerza de la Velocidad además de la capacidad de negar la conexión con dicha fuerza a otro usuario. <br>Teniendo en cuenta que tiene el mismo poder y el mismo peligro que Barry Allen a la hora de transformar la realidad, pero además tiene cierta inclinación para llevar a cabo dicha transformación... ¡Flash Reverso es uno de los villanos más poderosos y peligrosos de todo el Universo DC, capaz de destruir todo aquello que conoces a golpe de velocidad y en un breve pestañeo!",
      img:"assets/img/FlashReverso.png" ,
      aparicion: "1963-09",
      casa: "DC",
    },
    {
      nombre: "Doomsday",
      bio: "Doomsday es un ser de origen desconocido y que solo era conocido como una leyenda kryptoniana. Con el tiempo la leyenda se convirtió en realidad y Doomsday apareció en Krypton para arrasar el planeta. Sin embargo, fue detenido por el Coronel Zod usando un antiguo traje de guerra kryptoniano. Posteriormente Zod exilió a la bestia en la Zona Fantasma.",
      img: "assets/img/Doomsday.png",
      aparicion: "1992-11",
      casa: "DC",
    },
    {
      nombre: "Brainiac",
      bio: "Brainiac es un supervillano ficticio que aparece en los cómics publicados por DC Comics. Brainiac es conocido por encoger y robar Kandor, la capital del planeta natal de Superman, Krypton, e incluso es responsable de la destrucción de Krypton en algunas continuidades.",
      img: "assets/img/Brainiac.png",
      aparicion: "1958-07",
      casa: "DC",
    },
    {
      nombre: "Anti Monitor",
      bio: "Antimonitor ha sido uno de los enemigos más formidables jamás enfrentados por los héroes del Universo DC (o del \"Multiverso\", como ha sido entonces y ahora). Él es directamente responsable de más muertes que cualquier otro conocido supervillano de DC, al haber destruido miles de universos.",
      img: "assets/img/AntiMonitor.png",
      aparicion: "1985-05",
      casa: "DC",
    },
    {
      nombre: "Loki",
      bio: "Loki Laufeyson fue el hijo de Laufey, pero fue abandonado por este después de su nacimiento. Tras ser encontrado por el Rey de Asgard, Odín, Loki fue criado por la Familia Real Asgardiana junto con Thor. Él se ganó una reputación como el Dios de las Mentiras y organizó un plan para hacer que Odín destierre a Thor, convirtiéndose en el sucesor del trono de Asgard, mientras descubría su verdadero pasado. Loki tuvo éxito y asumió el trono cuando Odín cayó en el Sueño de Odín y decidió alistarse para destruir Jotunheim, sin embargo, como Thor fue ayudado por los Tres Guerreros a regresar a Asgard, Loki lo confrontó y, cuando sus planes fueron desaprobados por Odín, él se dejó caer al vacío durante el Duelo en el Puente Arcoíris.",
      img: "assets/img/Loki.png",
      aparicion:  "1949-08",
      casa: "Marvel",
    },
    {
      nombre: "Magneto",
      bio: "Magneto es un personaje de ficción, perteneciente al Universo Marvel. Primordialmente asociado al grupo de superhéroes llamado X Men, tanto como aliado o enemigo. Su primera aparición fue en X Men #1 (Uncanny X-Men) (Septiembre de 1963), creado por el escritor Stan Lee y el artista Jack Kirby. Magneto ha sido el principal antagonista de los X Men desde el primer momento. Ha liderado numerosos equipos en su contra, incluyendo la Brotherhood of Mutants y los Acolytes. Es el padre de Quicksilver, Scarlet Witch y Polaris.",
      img: "assets/img/Magneto.png",
      aparicion: "1963-09",
      casa: "Marvel",
    },
    {
      nombre: "Apocalipsis",
      bio: "Apocalipsis es un personaje ficticio publicado la editorial Marvel y creado por Jackson Guice y Louise Simonson. Se le conoce por ser uno de los más poderosos enemigos de los X-Men, y de los superhéroes del Universo Marvel en general. Generalmente se utiliza el nombre \"Apocalipsis\", pero en sus diferentes traducciones a veces se le llama por su nombre original en inglés, Apocalypse",
      img: "assets/img/Apocalipsis.png",
      aparicion: "1986",
      casa: "Marvel",
    },
    {
      nombre: "Galactus",
      bio: "Galactus es el único sobreviviente de un universo que existió antes del Big Bang. Nació como el humanoide Galan del planeta Taa, un mundo utópico de impresionantes logros científicos y sociales. Sin embargo, su universo sufría una enfermedad entrópica que impulsaba a la materia a contraerse mediante un \"Big Crunch\" en un solo punto del espacio en donde se compactaría formando un Huevo Cósmico",
      img: "assets/img/Galactus.png",
      aparicion: "1967",
      casa: "Marvel",
    },
    {
      nombre: "Thanos",
      bio: "Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir. Para cumplir dicha misión, Thanos se dedicó a buscar las Gemas del Infinito, ya que sus capacidades le ayudarían a matar directa y aleatoriamente a la mitad de la vida en el universo. Esto lo llevó a forjar convenios con los villanos Loki y Ronan en sus respectivas campañas contra la Tierra y Xandar, pero terminó perdiendo gran parte de sus recursos y la lealtad de sus hijas Gamora y Nebula. Finalmente, Thanos perdió la paciencia con sus subordinados y optó por buscar las Gemas personalmente, iniciando la Guerra del Infinito.",
      img: "assets/img/Thanos.png",
      aparicion: "1973-02",
      casa: "Marvel",
    }
  ]

  constructor() { }
  getVillanos():Villano[]{
    return this.villanos;
  }
}

export interface Villano{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
