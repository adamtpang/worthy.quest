import fs from 'fs';
import path from 'path';

const baseDir = './companiesmarketcap.com';
const outputFilePath = './data/companies.json';

async function parseCompanies() {
  const companies = [];
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const companySlug = entry.name;
      const htmlPath = path.join(baseDir, companySlug, 'marketcap', 'page.html');

      if (fs.existsSync(htmlPath)) {
        try {
          const content = fs.readFileSync(htmlPath, 'utf-8');

          // Extract Title (contains Name and Ticker)
          // <title>Apple (AAPL) - Market capitalization</title>
          const titleMatch = content.match(/<title>(.*?)<\/title>/);
          const title = titleMatch ? titleMatch[1] : '';

          // Extract Name and Ticker from title
          // Regex to handle "Company Name (TICKER) - ..."
          const nameTickerMatch = title.match(/^(.*?)\s\((.*?)\)/);
          const name = nameTickerMatch ? nameTickerMatch[1] : companySlug;
          const ticker = nameTickerMatch ? nameTickerMatch[2] : '';

          // Extract Market Cap from og:description
          // <meta property="og:description" content="As of January 2026 Apple has a market cap of $3.849 Trillion USD. ...">
          const descMatch = content.match(/property="og:description" content="(.*?)"/);
          const description = descMatch ? descMatch[1] : '';

          // Extract market cap value (e.g., $3.849 Trillion)
          const capMatch = description.match(/market cap of (\$.*?)\sUSD/);
          const marketCap = capMatch ? capMatch[1] : 'N/A';

          if (name && marketCap !== 'N/A') {
            companies.push({
              name,
              ticker,
              slug: companySlug,
              marketCap,
              description: description.split('. ')[0] + '.' // Just the first sentence
            });
          }
        } catch (err) {
          console.error(`Error parsing ${companySlug}:`, err.message);
        }
      }
    }
  }

  // Sort by market cap (rough sort since they are strings like "$3.849 Trillion")
  // For a better sort, we'd need to normalize them to numbers.
  
  fs.writeFileSync(outputFilePath, JSON.stringify(companies, null, 2));
  console.log(`Successfully parsed ${companies.length} companies into ${outputFilePath}`);
}

parseCompanies();
