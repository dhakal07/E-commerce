import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./SearchResults.css";

// Using placeholder URLs since local images caused errors earlier
const placeholderImage = "https://via.placeholder.com/150";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simple fuzzy match function to handle typos and partial matches
  const fuzzyMatch = (searchTerm, text) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    const normalizedText = text.toLowerCase().trim();
    // Handle common typos (e.g., "hooodie" -> "hoodie")
    const cleanSearch = normalizedSearch.replace(/o{2,}/g, "oo");
    const cleanText = normalizedText.replace(/o{2,}/g, "oo");
    return cleanText.includes(cleanSearch);
  };

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const allProducts = [
          // Female Clothing (from your screenshot)
          { id: 1, name: "Black heel", price: 20, image: placeholderImage, category: "Female" },
          { id: 2, name: "Black hoodie", price: 40, image: placeholderImage, category: "Female" },
          { id: 3, name: "Peach cap", price: 60, image: placeholderImage, category: "Female" },
          { id: 4, name: "Pink hoodie", price: 80, image: placeholderImage, category: "Female" },
          { id: 5, name: "Red Long T Shirt", price: 100, image: placeholderImage, category: "Female" },
          { id: 6, name: "Red T shirt", price: 20, image: placeholderImage, category: "Female" },
          { id: 7, name: "Skin heel", price: 30, image: placeholderImage, category: "Female" },
          { id: 8, name: "pink cap", price: 25, image: placeholderImage, category: "Female" },

          // Male Clothing (placeholders)
          { id: 9, name: "Blue Shirt", price: 29.99, image: placeholderImage, category: "Male" },
          { id: 10, name: "White Cap", price: 15.99, image: placeholderImage, category: "Male" },
          { id: 11, name: "Black Hoodie", price: 39.99, image: placeholderImage, category: "Male" },

          // Kids Clothing (placeholders)
          { id: 12, name: "Kids T-Shirt", price: 19.99, image: placeholderImage, category: "Kids" },
          { id: 13, name: "Kids Jacket", price: 45.99, image: placeholderImage, category: "Kids" },
        ];

        const filteredResults = allProducts.filter((product) =>
          fuzzyMatch(query, product.name) || fuzzyMatch(query, product.category)
        );
        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="search-results-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Search Results for "{query}"
      </motion.h2>
      {loading ? (
        <motion.div
          className="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Loading...
        </motion.div>
      ) : results.length > 0 ? (
        <motion.div
          className="results-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {results.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  console.log(`Image failed to load for ${product.name}`);
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>No results found for "{query}".</p>
          <p>Try searching for something else, like "heel," "hoodie," or "shirt."</p>
        </motion.div>
      )}
    </div>
  );
}

export default SearchResults;