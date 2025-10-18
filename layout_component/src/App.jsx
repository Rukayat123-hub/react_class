// Import components
import Header from './layout_component/Header';
import Content from './layout_component/Content';
import Footer from './layout_component/Footer';

// Main App component
function App() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Header />
      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />
      <Content />
      <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />
      <Footer />
    </div>
  );
}

export default App;
