import boruto from "../img/boruto.jpg";
import naruto from "../img/naruto.jpg";
import dragonB from "../img/dragon ball super.jpg";
import onePunch from "../img/one punch man.jpg";
import sword from "../img/sword art online.jpg";
import dragonBall2 from "../img/dragon ball z.jpg";
import dragonBall3 from "../img/dragonball.jpg";
import deathNote from "../img/death note.jpg";
import haikyuu from "../img/haikyuu.jpg";
import jujutsu from "../img/jujutsy kaisen.jpg";
import onePiece from "../img/one piece.jpg";
import slayer from "../img/demon slayer.jpg";
import revenger from "../img/tokyo revenger.jpg";
import tokyoghoul from "../img/tokyo ghoul.jpg";


const Top10 = () => {
    return (
        <font style={{ color: "white" }}>
            <img src={naruto} />
            <p>About<br />
                Author: Masashi Kishimoto<br />
                Published: 21 September 1999 (initial release)<br />
                Country: Japan<br />
                Adaptations: Naruto: Shippuden (2007), Naruto (2002), <br />
                Genres: Shonen manga, Fantasy, Action manga
            </p>



            <img src={dragonB} />
            <p>About <br />
                First episode date: 5 July 2015<br />
                Theme song: Limit-Break x Survivor<br />
                Networks: Fuji TV, Fuji Network System<br />
                Final episode date: 25 March 2018<br />
                English publisher: NA Viz Media
            </p>



            <img src={boruto} />
            <p>About<br />
                Authors: Masashi Kishimoto, Ukyo Kodachi<br />
                Studio: Pierrot<br />
                Genre: Shonen manga<br />
                Episodes: 277 (List of episodes)<br />
                Published by: Shueisha
            </p>



            <img src={onePunch} />
            <p>About<br />
                Authors: ONE, Yusuke Murata<br />
                Genre: Shonen manga<br />
                Volumes: 27 (List of volumes)<br />
                Studio: Madhouse (season 1); J.C.Staff (season 2)<br />
                Original network: TV Tokyo
            </p>



            <img src={sword} />
            <p>About<br />
                Author: Reki Kawahara<br />
                Studio: A-1 Pictures<br />
                Volumes: 27 (List of volumes)<br />
                Genre: Adventure; Science fiction;<br />
                Characters: Kirito, Asuna, Sinon, Eugeo, Alice Zuberg, Klein, Nobuyuki Sugō<br />
                Adaptations: Sword Art Online (2012)
            </p>



            <img src={dragonBall2} />
            <p>About<br />
                First episode date: 26 April 1989<br />
                Theme songs: Cha-La Head-Cha-La, WE GOTTA POWER<br />
                Genres: Anime, Action, Comedy, Drama, Adventure, Martial Arts, Thriller, Adventure fiction, Science fantasy, Animation<br />
                Network: Fuji Network System<br />
                Final episode date: 31 January 1996
                Program creator: Akira Toriyama
            </p>




            <img src={dragonBall3} />
            <p>About<br />
                Book(s): Companion books<br />
                Short film(s): Yo! Son Goku and His Friends Return!! (2008); Episode of Bardock (2011)<br />
                Owner: Bird Studio/Shueisha<br />
                Created by: Akira Toriyama<br />
                Original work: Dragon Ball (1984–1995)<br />
                Television special(s): Bardock – The Father of Goku (1990); The History of Trunks (1993); A Hero's Legacy (1997)
            </p>



            <img src={deathNote} />
            <p>About<br />
                Final episode date: 27 June 2007<br />
                Network: Nippon Television Network System<br />
                Program creators: Madhouse, Shueisha, VAP, Nippon TV, D.N. Dream Partners<br />
                First episode date: 3 October 2006<br />
                Genres: Anime, Horror, Drama, Mystery, Suspense, Thriller, Crime TV genre, Animation
            </p>



            <img src={haikyuu} />
            <p>About<br />
                A tale of youth and volleyball.<br />
                First episode date: 6 April 2014<br />
                Program creator: Haruichi Furudate<br />
                Adapted from: Haikyu!!<br />
                Writers: Taku Kishimoto
            </p>



            <img src={jujutsu} />
            <p>About<br />
                Author: Gege Akutami<br />
                Genre: Shonen manga<br />
                Adaptations: Jujutsu Kaisen (2020)<br />
                Volumes: 20 (List of volumes)<br />
                Studio: MAPPA<br />
                Main character: Yuji Itadori
            </p>



            <img src={slayer} />
            <p>About<br />
                Author: Koyoharu Gotouge<br />
                Publisher: Shueisha<br />
                Genre: Shonen manga<br />
                Volumes: 23 (List of volumes)<br />
                Adaptations: Demon Slayer: Kimetsu no Yaiba (2019)
            </p>



            <img src={onePiece} />
            <p>About<br />
                First episode date: 20 October 1999<br />
                Networks: Crunchyroll, Fuji TV, Cartoon Network, <br />
                Program creator: Eiichiro Oda<br />
                Adapted from: One Piece<br />
                Genre: Adventure; Fantasy;
            </p>


            <div align="left ">
                <img src={revenger}
                    alt="image" height="300" width="500" />
                <br />
                <h1>Tokyo Revenger</h1>

                <p>Tokyo Revengers is a Japanese manga series written and illustrated by Ken Wakui.<br />
                    It has been serialized in Kodansha's Weekly Shōnen Magazine since March 2017, with <br />
                    its chapters collected in 29 tankōbon volumes as of August 2022.</p>

                Author: Ken Wakui<br />
                Adaptations: Tokyo Revengers (2021)<br />
                Genre: Action; Science fiction thriller; Yankī;<br />
                Runtime: 120 minutes<br />
                English network: SEA Animax Asia<br />
                English publisher: NA: Kodansha USA (digital); Seven Seas Entertainment (print)

            </div>


            <div>
                <img src={tokyoghoul}
                    alt="image" height="300" width="500" />
                <h1>Tokyo Ghoul</h1>
                <p>
                    Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida.<br />
                    It was serialized in Shueisha's seinen manga magazine Weekly Young Jump between<br /> September 2011 and September 2014, and
                    was collected in fourteen tankōbon volumes.</p>

                Author: Sui Ishida<br />
                Studio: Pierrot<br />
                Publishers: Viz Media<br />
                Genres: Dark fantasy, Thriller<br />
                Adaptations: Tokyo Ghoul (2017), Tokyo Ghoul S (2019)
            </div>



        </font>
    )
}

export default Top10