import { algoliasearch } from 'algoliasearch' // 使用 import

// 初始化 Algolia 客戶端和索引
const appID = process.env.VUE_APP_ALGOLIA_APP_ID
const apiKey = process.env.VUE_APP_ALGOLIA_API_KEY
const apiAysKey = process.env.VUE_APP_ALGOLIA_AYS_API_KEY
const indexName = 'bookDataOutline'

const client = algoliasearch('196RB4GOLF', apiKey)
const analyticsClient = algoliasearch('196RB4GOLF', apiAysKey).initAnalytics({
    region: 'us',
})
// 搜尋函式
export async function searchAlgolia(query) {
    if (!query.trim()) {
        console.log('搜尋字串不可為空！')
        return null
    }

    try {
        // 使用 index.search 进行搜索
        const { results } = await client.search({
            requests: [
                {
                    indexName,
                    query: query,
                },
            ],
        })
        console.log(results[0].hits)
        return results
    } catch (error) {
        console.error('搜尋時發生錯誤:', error.message)
        return null
    }
}
export async function getTopSearchedTypes() {
    try {
        const response = await analyticsClient.getTopHits({
            index: indexName,
            limit: 1000, // 設置較大的數值來獲取更多搜尋數據
        })

        if (!response || !response.hits) {
            console.warn('沒有獲取到任何數據')
            return ['T001', 'T002', 'T003', 'T004']
        }

        // 統計每種 TXXX 類型的搜尋次數
        const typeCountMap = {}

        response.hits.forEach(({ count, hit }) => {
            const match = hit.match(/T\d{3}/) // 提取 TXXX 類型代號
            if (match) {
                const type = match[0] // 取得匹配的類型
                typeCountMap[type] = (typeCountMap[type] || 0) + count
            }
        })

        // 將結果轉為陣列並依 count 降序排序
        const sortedTypes = Object.entries(typeCountMap)
            .map(([type, count]) => ({ type, count }))
            .sort((a, b) => b.count - a.count)
            .map(item => item.type)
        return sortedTypes
    } catch (error) {
        console.error('獲取熱門搜尋類型時發生錯誤:', error.message)
        return ['T001', 'T002', 'T003', 'T004']
    }
}
