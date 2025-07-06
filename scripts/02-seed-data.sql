-- Insert sample products (these will be associated with the first user that signs up)
-- Note: In a real application, you would insert these after user registration
INSERT INTO products (user_id, name, description, category, enabled) VALUES
  ('00000000-0000-0000-0000-000000000000', 'Classic Denim Jacket', 'Timeless denim jacket perfect for casual wear', 'men', true),
  ('00000000-0000-0000-0000-000000000000', 'Elegant Evening Dress', 'Sophisticated black dress for special occasions', 'women', true),
  ('00000000-0000-0000-0000-000000000000', 'Casual Cotton T-Shirt', 'Comfortable everyday t-shirt in various colors', 'men', false),
  ('00000000-0000-0000-0000-000000000000', 'Designer Handbag', 'Luxury leather handbag with modern design', 'women', true),
  ('00000000-0000-0000-0000-000000000000', 'Sports Sneakers', 'High-performance athletic shoes', 'men', true)
ON CONFLICT DO NOTHING;
