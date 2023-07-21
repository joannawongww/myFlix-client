import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({
  user,
  favoriteMovieList,
  token,
  favoriteMovies,
}) => {
  return (
    <>
      <Row className="mt-2">
        <Col xs={{ offset: 7 }} sm={{ offset: 10 }}>
          <Link to={`/users/settings`}>Settings</Link>
        </Col>
      </Row>

      <Row>
        <Col sm={{ offset: 2 }} md={{ offset: 4 }}>
          User:
        </Col>
        <Col sm={8} md={7}>
          {user.Username}
        </Col>
      </Row>

      <Row>
        <Col sm={{ offset: 2 }} md={{ offset: 4 }}>
          Email:
        </Col>
        <Col sm={8} md={7}>
          {user.Email}
        </Col>
      </Row>

      <Row>
        <Col sm={{ offset: 2 }} md={{ offset: 4 }}>
          Birthday:
        </Col>
        <Col sm={8} md={7}>
          {user.Birthday}
        </Col>
      </Row>

      <Row>
        <Col sm={{ offset: 2 }} md={{ offset: 4 }}>
          Favorite Movies:
        </Col>
      </Row>
      <Row>
        {favoriteMovieList.map((movie) => (
          <Col xs={12} md={6} lg={4} key={movie._id}>
            <MovieCard
              movieDate={movie}
              user={user}
              token={token}
              favoriteMovies={favoriteMovies}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
