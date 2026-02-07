# Hướng dẫn khắc phục lỗi Tailwind CSS không load

## Vấn đề
Project CareerMate sau khi clone về hiển thị HTML thuần không có CSS styling do Tailwind CSS không được load.

## Nguyên nhân
1. **Package sai**: Project đang sử dụng `react-router-dom` nhưng môi trường Figma Make chỉ hỗ trợ `react-router`
2. **React dependencies**: React và React-DOM cần phải có trong `dependencies` thay vì chỉ trong `peerDependencies`

## Giải pháp đã thực hiện

### 1. Cập nhật package.json
- Đã thay `react-router-dom` bằng `react-router` version `^7.11.0`
- Đã thêm `react` và `react-dom` vào `dependencies`
- Đã xóa các config `peerDependencies` không cần thiết

### 2. Cập nhật imports trong các file
Đã thay đổi tất cả imports từ `'react-router-dom'` sang `'react-router'` trong các file:
- `/src/app/App.tsx`
- `/src/app/components/LandingPage.tsx`
- `/src/app/components/LoginPage.tsx`
- `/src/app/components/admin/AdminDashboard.tsx`
- `/src/app/components/candidate/CandidateDashboard.tsx`
- `/src/app/components/candidate/Overview.tsx`
- `/src/app/components/recruiter/RecruiterDashboard.tsx`

## Các bước để chạy lại project

### Bước 1: Xóa hoàn toàn dependencies cũ
```powershell
# Xóa node_modules
Remove-Item -Recurse -Force node_modules

# Xóa pnpm lock file
Remove-Item -Force pnpm-lock.yaml
```

### Bước 2: Cài đặt lại dependencies
```powershell
pnpm install
```

### Bước 3: Chạy development server
```powershell
pnpm dev
```

## Kiểm tra

Sau khi chạy `pnpm dev`, hãy kiểm tra:

1. ✅ Browser hiển thị đầy đủ CSS styling với màu sắc gradient
2. ✅ Landing page có nền gradient từ xanh đến tím
3. ✅ Buttons có styling đầy đủ
4. ✅ Navigation bar có background và borders
5. ✅ Network tab trong DevTools hiển thị file CSS được load

## Lưu ý quan trọng

### Về React Router
- **QUAN TRỌNG**: Luôn sử dụng `react-router` (KHÔNG phải `react-router-dom`)
- Nếu cần thêm routing mới, import từ `'react-router'`:
  ```tsx
  import { Link, useNavigate, Routes, Route } from 'react-router';
  ```

### Về Tailwind CSS
- Project sử dụng Tailwind CSS v4
- Config đã được setup sẵn trong `/src/styles/tailwind.css`
- KHÔNG cần tạo `tailwind.config.js`
- CSS được import qua `/src/styles/index.css` → `/src/main.tsx`

### Về pnpm
- Project YÊU CẦU sử dụng `pnpm` (không dùng npm hay yarn)
- Nguyên nhân: Có workspace protocol dependencies

## Troubleshooting

### Nếu vẫn không thấy CSS:

1. **Clear browser cache**:
   - Mở DevTools (F12)
   - Right-click vào nút Refresh
   - Chọn "Empty Cache and Hard Reload"

2. **Kiểm tra Vite dev server**:
   - Đảm bảo không có error trong terminal
   - Kiểm tra port 5173 có đang chạy

3. **Xóa cache Vite**:
   ```powershell
   Remove-Item -Recurse -Force node_modules/.vite
   pnpm dev
   ```

4. **Kiểm tra file imports**:
   - Mở `/src/main.tsx` - phải có `import './styles/index.css';`
   - Mở `/src/styles/index.css` - phải import tailwind.css, fonts.css, theme.css
   - Mở `/src/styles/tailwind.css` - phải có `@import 'tailwindcss';`

## Commit changes lên Git

Sau khi kiểm tra xong và mọi thứ hoạt động:

```bash
git add .
git commit -m "fix: Replace react-router-dom with react-router và add React to dependencies"
git push origin main
```

## Thông tin hỗ trợ

- **Tailwind CSS Version**: 4.1.12
- **React Version**: 18.3.1
- **React Router Version**: 7.11.0
- **Vite Version**: 6.3.5
- **Package Manager**: pnpm

## Tài liệu tham khảo

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [React Router v7 Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [pnpm Documentation](https://pnpm.io/)
