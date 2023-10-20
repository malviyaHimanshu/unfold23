const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_iuprYvnc0DS4Up4iJiSvYMaRZIrTiJtLMiisCJvTDPE" });

(async () => {
  const pageId = 'fed5ac9f1a9a416fa85ae8fc14b78ebf';
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
})();