import Link from 'next/link'

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <>
      <div>
        About!!!
      </div>
      <Link href="/">Index</Link>
    </>
  );
}

export default About;
