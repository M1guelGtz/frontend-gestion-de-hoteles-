# Sistema de Protección de Rutas

## 🔐 Cómo Funciona

El sistema ahora protege las rutas correctamente con las siguientes medidas de seguridad:

### 1. **Autenticación**
- Se verifica que el usuario tenga un token válido en `localStorage`
- Si no está autenticado, se redirige automáticamente a `/login`

### 2. **Autorización por Roles**
- Cada ruta protegida requiere un rol específico:
  - `/admin/*` → requiere rol `admin_global`
  - `/hotel/*` → requiere rol `admin_hotel`
  - `/reception/*` → requiere rol `recepcionista`
  - `/housekeeping/*` → requiere rol `recamarista`

### 3. **Redirecciones Automáticas**
- Usuario no autenticado → `/login`
- Usuario autenticado sin permiso → `/` (home)
- Usuario en ruta pública ya autenticado → dashboard según su rol

## 📁 Archivos Creados/Modificados

### Nuevos Archivos:
1. **`src/hooks/useAuth.ts`** - Hook para gestionar autenticación
2. **`src/Components/ProtectedRoute.tsx`** - Componente de protección de rutas
3. **`src/pages/LoginPage.tsx`** - Página de login de ejemplo
4. **`src/Components/LogoutButton.tsx`** - Botón de cerrar sesión

### Archivos Modificados:
1. **`src/App.tsx`** - Implementa la protección de rutas
2. **`src/Routes/router.public.tsx`** - Usa LoginPage
3. **`src/Routes/router.admin.global.tsx`** - Agrega LogoutButton

## 🚀 Cómo Usar

### 1. Configura el archivo .env

```bash
cp .env.example .env
```

Edita `.env` y configura tu URL del backend:
```env
VITE_API_URL=http://localhost:3000/api
```

### 2. Implementa el Endpoint de Login en tu Backend

El endpoint debe responder en: `POST /auth/login`

**Request:**
```json
{
  "email": "usuario@example.com",
  "password": "password123"
}
```

**Response esperada:**
```json
{
  "token": "jwt-token-aqui",
  "user": {
    "userID": 1,
    "personaID": 1,
    "hotelID": 1,
    "email": "usuario@example.com",
    "username": "usuario",
    "role": "admin_global",
    "activo": true,
    "fechaRegistro": "2025-01-01T00:00:00.000Z"
  }
}
```

### 3. Prueba el Sistema

1. **Sin autenticación:**
   ```
   http://localhost:5173/admin → Redirige a /login
   ```

2. **Con login correcto:**
   ```
   /login → Login exitoso → Redirige según rol
   ```

3. **Con rol incorrecto:**
   ```
   Usuario 'recepcionista' intenta acceder a /admin → Redirige a /
   ```

## 🔧 Personalización

### Agregar más rutas protegidas

En `src/hooks/validatorRoute.ts`, añade nuevas rutas:

```typescript
const adminGlobalRoutes = [
  "/admin", 
  "/admin/users", 
  "/admin/settings",
  "/admin/reportes"  // ← Nueva ruta
];
```

### Modificar comportamiento de redirección

En `src/Components/ProtectedRoute.tsx`:

```typescript
if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
}
```

### Agregar logout en otras páginas

```tsx
import LogoutButton from '../Components/LogoutButton';

export default function MiComponente() {
  return (
    <>
      <LogoutButton />
      {/* tu contenido */}
    </>
  );
}
```

## 🛡️ Seguridad Adicional Recomendada

1. **Verificación de Token en Backend**: Siempre valida el token en cada petición
2. **Refresh Tokens**: Implementa tokens de renovación
3. **Expiración de Sesión**: Agrega lógica para tokens expirados
4. **HTTPS**: Usa HTTPS en producción
5. **HttpOnly Cookies**: Considera usar cookies en lugar de localStorage

## 📝 Notas

- El token se guarda en `localStorage` (básico para desarrollo)
- En producción, considera usar `httpOnly cookies` para mayor seguridad
- El password no se incluye en el objeto User guardado (solo se envía al login)
