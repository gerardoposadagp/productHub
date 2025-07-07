-- Insert sample products (these will be associated with the first user that signs up)
-- Note: In a real application, you would insert these after user registration
INSERT INTO products (user_id, name, description, category, enabled) VALUES
  ('973acb1e-22fb-496f-85c8-cc8d535f5dd2', 'Classic Denim Jacket', 'Timeless denim jacket perfect for casual wear', 'men', true),
  ('973acb1e-22fb-496f-85c8-cc8d535f5dd2', 'Elegant Evening Dress', 'Sophisticated black dress for special occasions', 'women', true),
  ('973acb1e-22fb-496f-85c8-cc8d535f5dd2', 'Casual Cotton T-Shirt', 'Comfortable everyday t-shirt in various colors', 'men', false),
  ('973acb1e-22fb-496f-85c8-cc8d535f5dd2', 'Designer Handbag', 'Luxury leather handbag with modern design', 'women', true),
  ('973acb1e-22fb-496f-85c8-cc8d535f5dd2', 'Sports Sneakers', 'High-performance athletic shoes', 'men', true)
ON CONFLICT DO NOTHING;
