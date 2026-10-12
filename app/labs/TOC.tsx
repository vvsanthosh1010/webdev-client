import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc-container">
      <h4 id="wd-toc-name">Santhosh Velayutham Venugopal</h4>
      <p id="wd-toc-motto">
        <em>Build it, break it, fix it.</em>
      </p>
      <ul id="wd-toc">
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        <li><Link href="/labs/lab1" id="wd-lab1-link">Lab 1</Link></li>
        <li><Link href="/labs/lab2" id="wd-lab2-link">Lab 2</Link></li>
        <li><Link href="/labs/lab3" id="wd-lab3-link">Lab 3</Link></li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
      <Link
        href="https://webdev-client.vercel.app/book/ch1"
        id="wd-toc-book-link"
        target="_blank"
      >
        Chapter 1 notes
      </Link>
    </div>
  );
}