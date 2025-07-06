// src/components/PostForm.tsx
import { useState } from 'react'
import { categories } from '../data/categories'

const PostForm = () => {
  const [mainCategory, setMainCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [thirdCategory, setThirdCategory] = useState('')

  const selectedMain = categories.find((c) => c.value === mainCategory)
  const selectedSub = selectedMain?.children?.find((s) => s.value === subCategory)

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4">게시글 작성</h2>

      {/* 카테고리 선택 */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">1단계: 카테고리</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={mainCategory}
          onChange={(e) => {
            setMainCategory(e.target.value)
            setSubCategory('')
            setThirdCategory('')
          }}
        >
          <option value="">선택해주세요</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* 서브 카테고리 */}
      {selectedMain?.children && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">2단계: 하위 카테고리</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={subCategory}
            onChange={(e) => {
              setSubCategory(e.target.value)
              setThirdCategory('')
            }}
          >
            <option value="">선택해주세요</option>
            {selectedMain.children.map((sub) => (
              <option key={sub.value} value={sub.value}>
                {sub.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 3단계 카테고리 */}
      {selectedSub?.children && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">3단계: 세부 항목</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={thirdCategory}
            onChange={(e) => setThirdCategory(e.target.value)}
          >
            <option value="">선택해주세요</option>
            {selectedSub.children.map((third) => (
              <option key={third.value} value={third.value}>
                {third.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 제목 */}
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="border p-2 rounded w-full mb-4"
      />

      {/* 내용 */}
      <textarea
        placeholder="내용을 입력하세요"
        className="border p-2 rounded w-full h-40 mb-4"
      />

      {/* 가격 */}
      <input
        type="number"
        placeholder="가격 (원)"
        className="border p-2 rounded w-full mb-4"
      />

      {/* 임시 출력 */}
      <div className="mt-6 text-sm text-gray-500">
        선택된 카테고리: {mainCategory} / {subCategory} / {thirdCategory}
      </div>
    </div>
  )
}

export default PostForm
