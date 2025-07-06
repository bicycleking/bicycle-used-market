import PostForm from './components/PostForm'

function App() {
  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">🚴‍♂️ 바이시클 중고 마켓</h1>
      <p className="text-lg mb-6">자전거를 사고팔 수 있는 쉽고 빠른 공간</p>

      {/* 게시글 작성 폼 컴포넌트 */}
      <PostForm />
    </div>
  )
}

export default App
