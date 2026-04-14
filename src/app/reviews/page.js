// src/app/reviews/page.js
import ReviewsPage from '@/components/ReviewsPage';

export const metadata = {
  title: "Reviews | Rosary Global",
  description: "Read what our travelers have to say about their Sri Lankan adventures.",
};

// THE IMPORTANT PART: 'export default' must be here!
export default function Page() {
  return (
    <main>
      <ReviewsPage />
    </main>
  );
}