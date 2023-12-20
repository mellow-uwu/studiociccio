
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studio Kitchen - Your Study Partner</title>
        <meta name="description" content="Join Studio Kitchen for a smarter way to prepare for your university exams!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Studio Kitchen!</h1>
        <p>Your ultimate companion in university exam preparation.</p>
        <p>Upload and access study materials like books, notes, summaries, and more.</p>
        
        <Image
          src="/university-students.jpg" // This will be replaced with a suitable image
          alt="University Students Studying"
          width={500}
          height={300}
        />

        <button>Join the Alpha Version Now</button>
      </main>
    </div>
  )
}
