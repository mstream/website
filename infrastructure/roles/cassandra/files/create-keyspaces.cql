CREATE KEYSPACE IF NOT EXISTS website
WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'dc1' : 2 }
AND DURABLE_WRITES = true;

