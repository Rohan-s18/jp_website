import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function HomePage(){
    return(
        <div className={styles.jocs_home}>

            <h2>
                About Me
            </h2>

            <p>
                My name is Jenny Puzey, but I sometimes use the last name Talia. I hate using Dr Java as an IDE because Dr Java sucks, 
                I use VSCode and Eclipse for most of my programming. My favourite editor is VIM. 

                <br></br><br></br>

                My favourite programming languages are C, C++, Python, Matlab, Java, JavaScript, C# and Julia. 

                <br></br><br></br>

                I also hate MongoDB. 

            </p>

            <br></br><br></br><br></br>


            <br></br><br></br><br></br>


        </div>


    )
}