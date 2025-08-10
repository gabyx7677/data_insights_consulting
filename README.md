# 📊 Assesment Data Driven Consultant

Proyecto de evaluación y consultoría orientado a la gestión, análisis y optimización de datos, desarrollado por **Gabriel García Montoya**  

Incluye ejercicios prácticos de manejo de bases de datos SQL, auditoría técnica de `dataLayer` web, diseño de modelo entidad-relación para unificación de datos, y propuesta de solución a un caso de consultoría empresarial.

---

## 📁 Contenido del Proyecto

### 1️⃣ Manejo de Bases de Datos (SQL)
Evaluación de habilidades en consultas SQL sobre una base de datos relacional que contiene información de clientes, pedidos y productos.

**Tareas desarrolladas:**
- Cálculo de cantidad total de productos vendidos por categoría.
- Gasto acumulado por cliente ordenado cronológicamente.
- Detección de productos nunca vendidos.
- Creación de la vista `customer_order_summary` con métricas clave por cliente.

**Tecnologías:**  
`Python` | `Pandas` | `SQLite` | `SQL`

---

### 2️⃣ Analítica Web y Evaluación Técnica de DataLayer
Auditoría del flujo de eventos en **super99.com** usando **DevTools**, **Omnibug** y **Tag Assistant**.

**Incluye:**
- Verificación de envío de eventos `productDetail` y `addToCart`.
- Identificación de etiquetas activas (Google Ads, GTM, DoubleClick).
- Revisión de cookies y posibles identificadores.
- Detección de inconsistencias y propuesta de mejoras:
  - Completar campos faltantes.
  - Estandarizar eventos.
  - Optimizar firing de etiquetas.
  - Documentar estructura del `dataLayer`.

---

### 3️⃣ Modelo de Entidad-Relación (ERD)
Propuesta de integración de múltiples fuentes de datos (HubSpot, navegación web, CRM, POS) en una **CDP (Customer Data Platform)** para obtener una visión 360° del cliente.

**Entidades clave:**
- Cliente
- Lead
- Profile
- Navegacion_Event
- Venta
- POS_Transaction

**Beneficios esperados:**
- Personalización de campañas.
- Mejor atribución de ventas.
- Optimización de inversión en marketing.
- Retención y segmentación avanzada.

---

### 4️⃣ Caso de Consultoría
Plan de acción para resolver retrasos en reportes y falta de centralización de datos.

**Propuesta:**
1. Implementar un Data Warehouse corporativo.
2. Automatizar procesos ETL.
3. Desplegar dashboards interactivos en tiempo real.
4. Establecer gobernanza de datos.
5. Configurar monitoreo y alertas automáticas.

---


