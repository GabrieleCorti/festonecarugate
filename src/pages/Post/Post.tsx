import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MainPage from "../../components/layouts/MainPage";
import Overlay from "../../components/Overlay";
import PostInput from "../../components/PostInput";
import matita from "../../static/img/matita.png";
import saluto from "../../static/img/saluto.png";
import { postMessage } from "../../api/calls/postMessage";
import { TailSpin } from "react-loader-spinner";
import "./style.css";

const sleep = () =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

const Post: React.FC = () => {
  const [post, setPost] = useState({
    text: "",
    name: "",
  });
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <MainPage viewportH>
        <h1 className="post-section-title">SE DICO FESTONE...</h1>
        <div>
          <PostInput
            icon={
              <img
                src={matita}
                alt="Raccontaci un aneddoto, una storia legata al tuo Festone"
              />
            }
            title="Raccontaci un aneddoto, una storia legata al tuo Festone"
            onChangeText={(text) =>
              setPost((prev) => ({
                ...prev,
                text,
              }))
            }
            onChangeName={(name) =>
              setPost((prev) => ({
                ...prev,
                name,
              }))
            }
          />
        </div>
        <div className="invia-button-wrapper">
          <Button
            disable={post.text.length === 0 || loading}
            small
            text="invia"
            onClick={async () => {
              setLoading(true);
              try {
                /*  await postMessage(post); */
                await sleep();
              } catch (error) {
                setError(true);
              } finally {
                setLoading(false);
                setIsOverlayVisible(true);
              }
            }}
          />
        </div>
      </MainPage>
      <Overlay active={isOverlayVisible}>
        <div className="overlay-invio">
          {error ? (
            <>
              <h2>Si è verificato un errore</h2>
              <h2>Riprova più tardi</h2>
            </>
          ) : (
            <>
              <h2>GRAZIE!</h2>
              <h2>Per il tuo prezioso ricordo del Festone</h2>
              <div>
                <img src={saluto} alt="GRAZIE" />
              </div>
            </>
          )}
          <div className="link-container">
            <Link style={{ color: "white" }} to={"/"}>
              Torna a home
            </Link>
          </div>
        </div>
      </Overlay>
      <Overlay active={loading}>
        <TailSpin
          height="80"
          width="80"
          color="white"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          visible={true}
        />
      </Overlay>
    </>
  );
};

export default Post;
