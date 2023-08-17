import "../src/global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GabiZacalusni.png",
      name: "Gabriela Freitas",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Olá Galera!" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      { type: "link", content: "jane.design / doctorcare" },
    ],
    publishedAt: new Date("2023-08-13 18:22:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Olá Galera!" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      { type: "link", content: "jane.design / doctorcare" },
    ],
    publishedAt: new Date("2023-08-20 20:22:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
