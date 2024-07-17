import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { ProductValidationSchema } from './product.validation'
import { ProductController } from './product.controller'

const router = express.Router()

router.post(
  '/create-product',
  // validateRequest(ProductValidationSchema.createProductValidationSchema),
  ProductController.createProduct,
)
router.patch(
  '/:id',
  // validateRequest(ProductValidationSchema.updateProductValidationSchema),
  ProductController.updateProduct,
)
router.patch(
  '/update-quantity/:id',
  // validateRequest(ProductValidationSchema.updateProductValidationSchema),
  ProductController.updateProductQuantity,
)
router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getSingleProduct)
router.delete('/:id', ProductController.deleteProduct)

export const ProductRoutes = router
