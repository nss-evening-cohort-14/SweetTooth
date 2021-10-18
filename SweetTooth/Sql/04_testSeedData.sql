-- Test no repating Guids: 
-- total rows per table
with w as (
	select count(*) [totalRows] from snack
	union
	select count(*) [totalRows] from mood
	union
	select count(*) [totalRows] from snackmood
	),

-- total rows across all tables
x as (
	select sum(totalRows) [totalRows] from w
	),

-- total Ids across all tables
y as (
	select id from snack
		union 
	select id from mood 
		union
	select id from snackmood
	),

-- total unique Ids across all tables
z as (
	select count(distinct id) uniqueIds from y
	)

	-- total Rows = uniqueIds, therefore no repeating GUIDs
select x.*, z.* from x, z
;

-- show all seed data for snack and mood
select s.*, m.*
from 
	snack s	
		join snackmood sm on sm.SnackId = s.Id
		join mood m on m.Id = sm.MoodId
order by s.[Name]
;


