import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HeaderLayout = lazy(() => import('./headerLayout/index.jsx'));
const Home = lazy(() => import('./home/index.jsx'));
const Movies = lazy(() => import('./movies/index.jsx'));
const MovieDetails = lazy(() => import('./moviedetails/index.jsx'));
const Cast = lazy(() => import('./cast/index.jsx'));
const Reviews = lazy(() => import('./reviews/index.jsx'));

export const App = () => {
  return (
    <>
      <HeaderLayout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
