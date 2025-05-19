a@a:~/protocolsswapbac$ curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"username": "admin", "password": "admin123"}'
{"success":true,"data":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3NjcwNTEyLCJleHAiOjE3NDc3NTY5MTJ9.KtNnO8pW7pisKTkrjQJMbcE621hX43bJ5EI4d4BOMAQ","user":{"id":"1","username":"admin","email":"admin@example.com","role":"admin"}}}a@a:~/protocolsswapbac$ 



















a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "EURC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"EURC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b6dfb0c134f47b3cbaae0","lastUpdated":"2025-05-19T17:44:27.939Z","createdAt":"2025-05-19T17:44:27.956Z","updatedAt":"2025-05-19T17:44:27.956Z","__v":0}}a@a:~/protocolsswapbac$ 

















a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "USDT", "currentRate": 1.0, "type": "major"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"USDT","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"_id":"682b6f5f0c134f47b3cbaae4","lastUpdated":"2025-05-19T17:50:23.387Z","createdAt":"2025-05-19T17:50:23.390Z","updatedAt":"2025-05-19T17:50:23.390Z","__v":0}}a@a:~/protocolsswapbac$ 











a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "DAI", "currentRate": 1.0, "type": "major"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"_id":"682b6f9a0c134f47b3cbaae7","lastUpdated":"2025-05-19T17:51:22.516Z","createdAt":"2025-05-19T17:51:22.518Z","updatedAt":"2025-05-19T17:51:22.518Z","__v":0}}a@a:~/protocolsswapbac$ 










a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDT", "quoteToken": "DAI", "currentRate": 1.0, "type": "major"}'baseToken": "USDT", "quoteToken": "DAI", "currentRate": 1.0, "type": "major"}'
{"success":true,"data":{"baseToken":"USDT","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"_id":"682b6fd00c134f47b3cbaaea","lastUpdated":"2025-05-19T17:52:16.890Z","createdA
a@a:~/protocolsswapbac$ 












a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "BUSD", "currentRate": 1.0, "type": "major"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"_id":"682b70010c134f47b3cbaaed","lastUpdated":"2025-05-19T17:53:05.262Z","createdAt":"2025-05-19T17:53:05.263Z","updatedAt":"2025-05-19T17:53:05.263Z","__v":0}}a@a:~/protocolsswapbac$ 























a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDT", "quoteToken": "BUSD", "currentRate": 1.0, "type": "major"}'
{"success":true,"data":{"baseToken":"USDT","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"_id":"682b70500c134f47b3cbaaf0","lastUpdated":"2025-05-19T17:54:24.632Z","createdAt":"2025-05-19T17:54:24.633Z","updatedAt":"2025-05-19T17:54:24.633Z","__v":0}}a@a:~/protocolsswapbac$ 














a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "GBPC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"GBPC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b708e0c134f47b3cbaaf3","lastUpdated":"2025-05-19T17:55:26.168Z","createdAt":"2025-05-19T17:55:26.169Z","updatedAt":"2025-05-19T17:55:26.169Z","__v":0}}a@a:~/protocolsswapbac$ 











a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "JPYC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"JPYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b70c00c134f47b3cbaaf6","lastUpdated":"2025-05-19T17:56:16.389Z","createdAt":"2025-05-19T17:56:16.390Z","updatedAt":"2025-05-19T17:56:16.390Z","__v":0}}a@a:~/protocolsswapbac$ 








a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "AUDC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"AUDC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b70ee0c134f47b3cbaaf9","lastUpdated":"2025-05-19T17:57:02.045Z","createdAt":"2025-05-19T17:57:02.047Z","updatedAt":"2025-05-19T17:57:02.047Z","__v":0}}a@a:~/protocolsswapbac$ 








a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "CADC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"CADC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b711b0c134f47b3cbaafc","lastUpdated":"2025-05-19T17:57:47.806Z","createdAt":"2025-05-19T17:57:47.807Z","updatedAt":"2025-05-19T17:57:47.807Z","__v":0}}a@a:~/protocolsswapbac$ 









a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "SGD", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"SGD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b71500c134f47b3cbaaff","lastUpdated":"2025-05-19T17:58:40.264Z","createdAt":"2025-05-19T17:58:40.265Z","updatedAt":"2025-05-19T17:58:40.265Z","__v":0}}a@a:~/protocolsswapbac$ 







a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "HKD", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"HKD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b71780c134f47b3cbab02","lastUpdated":"2025-05-19T17:59:20.268Z","createdAt":"2025-05-19T17:59:20.269Z","updatedAt":"2025-05-19T17:59:20.269Z","__v":0}}a@a:~/protocolsswapbac$ 





a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "CNYC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"CNYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b71c00c134f47b3cbab05","lastUpdated":"2025-05-19T18:00:32.302Z","createdAt":"2025-05-19T18:00:32.303Z","updatedAt":"2025-05-19T18:00:32.303Z","__v":0}}a@a:~/protocolsswapbac$ 









a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "INRC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"INRC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b71f50c134f47b3cbab08","lastUpdated":"2025-05-19T18:01:25.919Z","createdAt":"2025-05-19T18:01:25.920Z","updatedAt":"2025-05-19T18:01:25.920Z","__v":0}}a@a:~/protocolsswapbac$ 











a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X POST http://localhost:5000/api/pools -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"baseToken": "USDC", "quoteToken": "NGNC", "currentRate": 1.0, "type": "fiat-pegged"}'
{"success":true,"data":{"baseToken":"USDC","quoteToken":"NGNC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"_id":"682b72260c134f47b3cbab0b","lastUpdated":"2025-05-19T18:02:14.400Z","createdAt":"2025-05-19T18:02:14.401Z","updatedAt":"2025-05-19T18:02:14.401Z","__v":0}}a@a:~/protocolsswapbac$ 













a@a:~/protocolsswapbac$ export AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ3Njc2NTE3LCJleHAiOjE3NDc3NjI5MTd9.3adsNXEGGpNJcBumRGzMuqmnzMx784MnbdUau1IQ__4" && curl -X PUT http://localhost:5000/api/pools/682b6f5f0c134f47b3cbaae4/rate -H "Content-Type: application/json" -H "Authorization: Bearer $AUTH_TOKEN" -d '{"newRate": 1.001}'
{"success":true,"data":{"_id":"682b6f5f0c134f47b3cbaae4","baseToken":"USDC","quoteToken":"USDT","currentRate":1.001,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T18:33:28.286Z","createdAt":"2025-05-19T17:50:23.390Z","updatedAt":"2025-05-19T18:33:28.298Z","__v":0}}a@a:~/protocolsswapbac$ 



















a@a:~/protocolsswapbac$ curl -X GET http://localhost:5000/api/pools
{"success":true,"data":[{"_id":"682b6dfb0c134f47b3cbaae0","baseToken":"USDC","quoteToken":"EURC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:44:27.939Z","createdAt":"2025-05-19T17:44:27.956Z","updatedAt":"2025-05-19T17:44:27.956Z","__v":0},{"_id":"682b6f5f0c134f47b3cbaae4","baseToken":"USDC","quoteToken":"USDT","currentRate":1.001,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T18:33:28.286Z","createdAt":"2025-05-19T17:50:23.390Z","updatedAt":"2025-05-19T18:33:28.298Z","__v":0},{"_id":"682b6f9a0c134f47b3cbaae7","baseToken":"USDC","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:51:22.516Z","createdAt":"2025-05-19T17:51:22.518Z","updatedAt":"2025-05-19T17:51:22.518Z","__v":0},{"_id":"682b6fd00c134f47b3cbaaea","baseToken":"USDT","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:52:16.890Z","createdAt":"2025-05-19T17:52:16.891Z","updatedAt":"2025-05-19T17:52:16.891Z","__v":0},{"_id":"682b70010c134f47b3cbaaed","baseToken":"USDC","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:53:05.262Z","createdAt":"2025-05-19T17:53:05.263Z","updatedAt":"2025-05-19T17:53:05.263Z","__v":0},{"_id":"682b70500c134f47b3cbaaf0","baseToken":"USDT","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:54:24.632Z","createdAt":"2025-05-19T17:54:24.633Z","updatedAt":"2025-05-19T17:54:24.633Z","__v":0},{"_id":"682b708e0c134f47b3cbaaf3","baseToken":"USDC","quoteToken":"GBPC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:55:26.168Z","createdAt":"2025-05-19T17:55:26.169Z","updatedAt":"2025-05-19T17:55:26.169Z","__v":0},{"_id":"682b70c00c134f47b3cbaaf6","baseToken":"USDC","quoteToken":"JPYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:56:16.389Z","createdAt":"2025-05-19T17:56:16.390Z","updatedAt":"2025-05-19T17:56:16.390Z","__v":0},{"_id":"682b70ee0c134f47b3cbaaf9","baseToken":"USDC","quoteToken":"AUDC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:57:02.045Z","createdAt":"2025-05-19T17:57:02.047Z","updatedAt":"2025-05-19T17:57:02.047Z","__v":0},{"_id":"682b711b0c134f47b3cbaafc","baseToken":"USDC","quoteToken":"CADC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:57:47.806Z","createdAt":"2025-05-19T17:57:47.807Z","updatedAt":"2025-05-19T17:57:47.807Z","__v":0},{"_id":"682b71500c134f47b3cbaaff","baseToken":"USDC","quoteToken":"SGD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:58:40.264Z","createdAt":"2025-05-19T17:58:40.265Z","updatedAt":"2025-05-19T17:58:40.265Z","__v":0},{"_id":"682b71780c134f47b3cbab02","baseToken":"USDC","quoteToken":"HKD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:59:20.268Z","createdAt":"2025-05-19T17:59:20.269Z","updatedAt":"2025-05-19T17:59:20.269Z","__v":0},{"_id":"682b71c00c134f47b3cbab05","baseToken":"USDC","quoteToken":"CNYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:00:32.302Z","createdAt":"2025-05-19T18:00:32.303Z","updatedAt":"2025-05-19T18:00:32.303Z","__v":0},{"_id":"682b71f50c134f47b3cbab08","baseToken":"USDC","quoteToken":"INRC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:01:25.919Z","createdAt":"2025-05-19T18:01:25.920Z","updatedAt":"2025-05-19T18:01:25.920Z","__v":0},{"_id":"682b72260c134f47b3cbab0b","baseToken":"USDC","quoteToken":"NGNC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:02:14.400Z","createdAt"
a@a:~/protocolsswapbac$ 








a@a:~/protocolsswapbac$ curl -X GET http://localhost:5000/api/pools/682b6f5f0c134f47b3cbaae4
{"success":true,"data":{"_id":"682b6f5f0c134f47b3cbaae4","baseToken":"USDC","quoteToken":"USDT","currentRate":1.001,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T18:33:28.286Z","createdAt":"2025-05-19T17:50:23.390Z","updatedAt":"2025-05-19T18:33:28.298Z","__v":0}}a@a:~/protocolsswapbac$ 












a@a:~/protocolsswapbac$ curl -X GET http://localhost:5000/api/pools/type/major
{"success":true,"data":[{"_id":"682b6f5f0c134f47b3cbaae4","baseToken":"USDC","quoteToken":"USDT","currentRate":1.001,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T18:33:28.286Z","createdAt":"2025-05-19T17:50:23.390Z","updatedAt":"2025-05-19T18:33:28.298Z","__v":0},{"_id":"682b6f9a0c134f47b3cbaae7","baseToken":"USDC","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:51:22.516Z","createdAt":"2025-05-19T17:51:22.518Z","updatedAt":"2025-05-19T17:51:22.518Z","__v":0},{"_id":"682b6fd00c134f47b3cbaaea","baseToken":"USDT","quoteToken":"DAI","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:52:16.890Z","createdAt":"2025-05-19T17:52:16.891Z","updatedAt":"2025-05-19T17:52:16.891Z","__v":0},{"_id":"682b70010c134f47b3cbaaed","baseToken":"USDC","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:53:05.262Z","createdAt":"2025-05-19T17:53:05.263Z","updatedAt":"2025-05-19T17:53:05.263Z","__v":0},{"_id":"682b70500c134f47b3cbaaf0","baseToken":"USDT","quoteToken":"BUSD","currentRate":1,"updatedBy":"admin","type":"major","isActive":true,"lastUpdated":"2025-05-19T17:54:24.632Z","createdAt":"2025-05-19T17:54:24.633Z","updatedAt":"2025-05-19T17:54:24.633Z","__v":0}]}a@a:~/protocolsswapbac$





















a@a:~/protocolsswapbac$ curl -X GET http://localhost:5000/api/pools/type/fiat-pegged
{"success":true,"data":[{"_id":"682b6dfb0c134f47b3cbaae0","baseToken":"USDC","quoteToken":"EURC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:44:27.939Z","createdAt":"2025-05-19T17:44:27.956Z","updatedAt":"2025-05-19T17:44:27.956Z","__v":0},{"_id":"682b708e0c134f47b3cbaaf3","baseToken":"USDC","quoteToken":"GBPC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:55:26.168Z","createdAt":"2025-05-19T17:55:26.169Z","updatedAt":"2025-05-19T17:55:26.169Z","__v":0},{"_id":"682b70c00c134f47b3cbaaf6","baseToken":"USDC","quoteToken":"JPYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:56:16.389Z","createdAt":"2025-05-19T17:56:16.390Z","updatedAt":"2025-05-19T17:56:16.390Z","__v":0},{"_id":"682b70ee0c134f47b3cbaaf9","baseToken":"USDC","quoteToken":"AUDC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:57:02.045Z","createdAt":"2025-05-19T17:57:02.047Z","updatedAt":"2025-05-19T17:57:02.047Z","__v":0},{"_id":"682b711b0c134f47b3cbaafc","baseToken":"USDC","quoteToken":"CADC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:57:47.806Z","createdAt":"2025-05-19T17:57:47.807Z","updatedAt":"2025-05-19T17:57:47.807Z","__v":0},{"_id":"682b71500c134f47b3cbaaff","baseToken":"USDC","quoteToken":"SGD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:58:40.264Z","createdAt":"2025-05-19T17:58:40.265Z","updatedAt":"2025-05-19T17:58:40.265Z","__v":0},{"_id":"682b71780c134f47b3cbab02","baseToken":"USDC","quoteToken":"HKD","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T17:59:20.268Z","createdAt":"2025-05-19T17:59:20.269Z","updatedAt":"2025-05-19T17:59:20.269Z","__v":0},{"_id":"682b71c00c134f47b3cbab05","baseToken":"USDC","quoteToken":"CNYC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:00:32.302Z","createdAt":"2025-05-19T18:00:32.303Z","updatedAt":"2025-05-19T18:00:32.303Z","__v":0},{"_id":"682b71f50c134f47b3cbab08","baseToken":"USDC","quoteToken":"INRC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:01:25.919Z","createdAt":"2025-05-19T18:01:25.920Z","updatedAt":"2025-05-19T18:01:25.920Z","__v":0},{"_id":"682b72260c134f47b3cbab0b","baseToken":"USDC","quoteToken":"NGNC","currentRate":1,"updatedBy":"admin","type":"fiat-pegged","isActive":true,"lastUpdated":"2025-05-19T18:02:14.400Z","createdAt":"2025-05-19T18:02:14.401Z","updatedAt":"2025-05-19T18:02:14.401Z","__v":0}]}a@a:~/protocolsswapbac$ 