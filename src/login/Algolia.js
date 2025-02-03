import { algoliasearch } from 'algoliasearch' // 使用 import

// 初始化 Algolia 客戶端和索引
const appID = '196RB4GOLF'
const apiKey = '4b4fefeb718060277bbeed56e5d74d6e'
const indexName = 'bookDataOutline'

const client = algoliasearch(appID, apiKey)

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
