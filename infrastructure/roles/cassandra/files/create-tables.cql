CREATE TABLE IF NOT EXISTS website.articles (
    id uuid PRIMARY KEY,
    title text,
    content text,
    categories set<text>,
    dateCreated timestamp
)
WITH COMPACTION = { 'class' : 'LeveledCompactionStrategy' };