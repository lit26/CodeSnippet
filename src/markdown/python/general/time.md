# Time

```python
from datetime import datetime

# timestamp to datetime
timestamp = 1545730073
dt_object = datetime.fromtimestamp(timestamp)
# datetime to time
now = datetime.now()
timestamp = datetime.timestamp(now)

# print time
date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
print("date and time:",date_time)	
```