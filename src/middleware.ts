import { NextRequest, NextResponse } from "next/server";

const redirects = [
  {
    from: "/github",
    to: "https://github.com/epoll31",
  },
  {
    from: "/linkedin",
    to: "https://www.linkedin.com/in/ethanpollack/",
  },
  {
    from: "/twitter",
    to: "https://twitter.com/epoll31",
  },
  {
    from: "/email",
    to: "mailto:epollack31@gmail.com",
  },
  {
    from: "/mqp",
    to: "./projects#mqp",
  },
  {
    from: "/iqp",
    to: "./projects#iqp",
  },
  {
    from: "/resume",
    to: "./docs/resume.pdf",
    rewrite: true,
  },
  {
    from: "/peerlist",
    to: "https://peerlist.io/ethan",
  },
  {
    from: "/ocd",
    to: "https://ocd-tracker-web-g0jtswrc9-epoll31s-projects.vercel.app",
    rewrite: true
  }
];

export default function middleware(request: NextRequest) {
  for (const redirect of redirects) {
    if (request.nextUrl.pathname === redirect.from) {
      if (redirect.rewrite) {
        return NextResponse.rewrite(new URL(redirect.to, request.url));
      } else {
        return NextResponse.redirect(new URL(redirect.to, request.url));
      }
    }
  }

  return NextResponse.next();
}
