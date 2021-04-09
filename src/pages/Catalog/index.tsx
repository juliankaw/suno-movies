import React from "react";
import styles from "./styles.module.scss";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";

export const Catalog = () => {
  const [genre, setGenre] = React.useState("");
  const [listStyle, setListStyle] = React.useState("lista");
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>
            Catálago <span>Completo</span>
          </h2>
          <section>
            <Select
              defaultValue="por gênero"
              options={["Notebook", "Smartphone", "Tablet"]}
              value={genre}
              setValue={setGenre}
            />
            <Button>mais populares</Button>
            <Select
              defaultValue="em lista"
              options={["em grid"]}
              value={genre}
              setValue={setGenre}
            />
          </section>
        </div>
      </div>
    </>
  );
};
