const prayerSchedule = {
"2025-07-24": { Fajr: "04:16", Dhuhr: "12:28", Asr: "15:51", Maghrib: "19:11", Isha: "20:35" },
"2025-07-25": { Fajr: "04:17", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:11", Isha: "20:34" },
"2025-07-26": { Fajr: "04:17", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:10", Isha: "20:33" },
"2025-07-27": { Fajr: "04:18", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:10", Isha: "20:33" },
"2025-07-28": { Fajr: "04:19", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:09", Isha: "20:32" },
"2025-07-29": { Fajr: "04:19", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:09", Isha: "20:31" },
"2025-07-30": { Fajr: "04:20", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:08", Isha: "20:30" },
"2025-07-31": { Fajr: "04:21", Dhuhr: "12:28", Asr: "15:52", Maghrib: "19:07", Isha: "20:29" },
"2025-08-01": { Fajr: "04:21", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:07", Isha: "20:29" },
"2025-08-02": { Fajr: "04:22", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:06", Isha: "20:28" },
"2025-08-03": { Fajr: "04:23", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:06", Isha: "20:27" },
"2025-08-04": { Fajr: "04:23", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:05", Isha: "20:26" },
"2025-08-05": { Fajr: "04:24", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:04", Isha: "20:25" },
"2025-08-06": { Fajr: "04:25", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:04", Isha: "20:24" },
"2025-08-07": { Fajr: "04:25", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:03", Isha: "20:23" },
"2025-08-08": { Fajr: "04:26", Dhuhr: "12:28", Asr: "15:53", Maghrib: "19:02", Isha: "20:22" },
"2025-08-09": { Fajr: "04:27", Dhuhr: "12:27", Asr: "15:53", Maghrib: "19:01", Isha: "20:22" },
"2025-08-10": { Fajr: "04:27", Dhuhr: "12:27", Asr: "15:53", Maghrib: "19:01", Isha: "20:21" },
"2025-08-11": { Fajr: "04:28", Dhuhr: "12:27", Asr: "15:53", Maghrib: "19:00", Isha: "20:20" },
"2025-08-12": { Fajr: "04:29", Dhuhr: "12:27", Asr: "15:53", Maghrib: "18:59", Isha: "20:19" },
"2025-08-13": { Fajr: "04:29", Dhuhr: "12:27", Asr: "15:53", Maghrib: "18:58", Isha: "20:18" },
"2025-08-14": { Fajr: "04:30", Dhuhr: "12:27", Asr: "15:53", Maghrib: "18:57", Isha: "20:17" },
"2025-08-15": { Fajr: "04:31", Dhuhr: "12:26", Asr: "15:53", Maghrib: "18:57", Isha: "20:16" },
"2025-08-16": { Fajr: "04:31", Dhuhr: "12:26", Asr: "15:52", Maghrib: "18:56", Isha: "20:15" },
"2025-08-17": { Fajr: "04:32", Dhuhr: "12:26", Asr: "15:52", Maghrib: "18:55", Isha: "20:13" },
"2025-08-18": { Fajr: "04:33", Dhuhr: "12:26", Asr: "15:52", Maghrib: "18:54", Isha: "20:12" },
"2025-08-19": { Fajr: "04:33", Dhuhr: "12:25", Asr: "15:52", Maghrib: "18:53", Isha: "20:11" },
"2025-08-20": { Fajr: "04:34", Dhuhr: "12:25", Asr: "15:52", Maghrib: "18:52", Isha: "20:10" },
"2025-08-21": { Fajr: "04:34", Dhuhr: "12:25", Asr: "15:52", Maghrib: "18:51", Isha: "20:09" },
"2025-08-22": { Fajr: "04:35", Dhuhr: "12:25", Asr: "15:51", Maghrib: "18:50", Isha: "20:08" },
"2025-08-23": { Fajr: "04:36", Dhuhr: "12:24", Asr: "15:51", Maghrib: "18:49", Isha: "20:07" },
"2025-08-24": { Fajr: "04:36", Dhuhr: "12:24", Asr: "15:51", Maghrib: "18:49", Isha: "20:06" },
"2025-08-25": { Fajr: "04:37", Dhuhr: "12:24", Asr: "15:51", Maghrib: "18:48", Isha: "20:05" },
"2025-08-26": { Fajr: "04:37", Dhuhr: "12:24", Asr: "15:50", Maghrib: "18:47", Isha: "20:04" },
"2025-08-27": { Fajr: "04:38", Dhuhr: "12:23", Asr: "15:50", Maghrib: "18:46", Isha: "20:02" },
"2025-08-28": { Fajr: "04:38", Dhuhr: "12:23", Asr: "15:50", Maghrib: "18:45", Isha: "20:01" },
"2025-08-29": { Fajr: "04:39", Dhuhr: "12:23", Asr: "15:50", Maghrib: "18:44", Isha: "20:00" },
"2025-08-30": { Fajr: "04:39", Dhuhr: "12:22", Asr: "15:49", Maghrib: "18:43", Isha: "19:59" },
"2025-08-31": { Fajr: "04:40", Dhuhr: "12:22", Asr: "15:49", Maghrib: "18:42", Isha: "19:58" },
"2025-09-01": { Fajr: "04:41", Dhuhr: "12:22", Asr: "15:49", Maghrib: "18:41", Isha: "19:57" },
"2025-09-02": { Fajr: "04:41", Dhuhr: "12:22", Asr: "15:48", Maghrib: "18:40", Isha: "19:56" },
"2025-09-03": { Fajr: "04:42", Dhuhr: "12:21", Asr: "15:48", Maghrib: "18:39", Isha: "19:54" },
"2025-09-04": { Fajr: "04:42", Dhuhr: "12:21", Asr: "15:47", Maghrib: "18:38", Isha: "19:53" },
"2025-09-05": { Fajr: "04:43", Dhuhr: "12:21", Asr: "15:47", Maghrib: "18:37", Isha: "19:52" },
"2025-09-06": { Fajr: "04:43", Dhuhr: "12:20", Asr: "15:47", Maghrib: "18:35", Isha: "19:51" },
"2025-09-07": { Fajr: "04:44", Dhuhr: "12:20", Asr: "15:46", Maghrib: "18:34", Isha: "19:50" },
"2025-09-08": { Fajr: "04:44", Dhuhr: "12:20", Asr: "15:46", Maghrib: "18:33", Isha: "19:49" },
"2025-09-09": { Fajr: "04:45", Dhuhr: "12:19", Asr: "15:45", Maghrib: "18:32", Isha: "19:47" },
"2025-09-10": { Fajr: "04:45", Dhuhr: "12:19", Asr: "15:45", Maghrib: "18:31", Isha: "19:46" },
"2025-09-11": { Fajr: "04:45", Dhuhr: "12:18", Asr: "15:44", Maghrib: "18:30", Isha: "19:45" },
"2025-09-12": { Fajr: "04:46", Dhuhr: "12:18", Asr: "15:44", Maghrib: "18:29", Isha: "19:44" },
"2025-09-13": { Fajr: "04:46", Dhuhr: "12:18", Asr: "15:43", Maghrib: "18:28", Isha: "19:43" },
"2025-09-14": { Fajr: "04:47", Dhuhr: "12:17", Asr: "15:43", Maghrib: "18:27", Isha: "19:41" },
"2025-09-15": { Fajr: "04:47", Dhuhr: "12:17", Asr: "15:42", Maghrib: "18:26", Isha: "19:40" },
"2025-09-16": { Fajr: "04:48", Dhuhr: "12:17", Asr: "15:42", Maghrib: "18:25", Isha: "19:39" },
"2025-09-17": { Fajr: "04:48", Dhuhr: "12:16", Asr: "15:41", Maghrib: "18:24", Isha: "19:38" },
"2025-09-18": { Fajr: "04:49", Dhuhr: "12:16", Asr: "15:41", Maghrib: "18:23", Isha: "19:37" },
"2025-09-19": { Fajr: "04:49", Dhuhr: "12:16", Asr: "15:40", Maghrib: "18:22", Isha: "19:36" },
"2025-09-20": { Fajr: "04:50", Dhuhr: "12:15", Asr: "15:40", Maghrib: "18:20", Isha: "19:35" },
"2025-09-21": { Fajr: "04:50", Dhuhr: "12:15", Asr: "15:39", Maghrib: "18:19", Isha: "19:33" },
"2025-09-22": { Fajr: "04:50", Dhuhr: "12:15", Asr: "15:38", Maghrib: "18:18", Isha: "19:32" },
"2025-09-23": { Fajr: "04:51", Dhuhr: "12:14", Asr: "15:38", Maghrib: "18:17", Isha: "19:31" },
"2025-09-24": { Fajr: "04:51", Dhuhr: "12:14", Asr: "15:37", Maghrib: "18:16", Isha: "19:30" },
"2025-09-25": { Fajr: "04:52", Dhuhr: "12:13", Asr: "15:37", Maghrib: "18:15", Isha: "19:29" },
"2025-09-26": { Fajr: "04:52", Dhuhr: "12:13", Asr: "15:36", Maghrib: "18:14", Isha: "19:28" },
"2025-09-27": { Fajr: "04:52", Dhuhr: "12:13", Asr: "15:35", Maghrib: "18:13", Isha: "19:27" },
"2025-09-28": { Fajr: "04:53", Dhuhr: "12:12", Asr: "15:35", Maghrib: "18:12", Isha: "19:26" },
"2025-09-29": { Fajr: "04:53", Dhuhr: "12:12", Asr: "15:34", Maghrib: "18:11", Isha: "19:25" },
"2025-09-30": { Fajr: "04:54", Dhuhr: "12:12", Asr: "15:34", Maghrib: "18:10", Isha: "19:23" },
"2025-10-01": { Fajr: "04:54", Dhuhr: "12:11", Asr: "15:33", Maghrib: "18:09", Isha: "19:22" },
"2025-10-02": { Fajr: "04:55", Dhuhr: "12:11", Asr: "15:32", Maghrib: "18:08", Isha: "19:21" },
"2025-10-03": { Fajr: "04:55", Dhuhr: "12:11", Asr: "15:32", Maghrib: "18:07", Isha: "19:20" },
"2025-10-04": { Fajr: "04:55", Dhuhr: "12:11", Asr: "15:31", Maghrib: "18:06", Isha: "19:19" },
"2025-10-05": { Fajr: "04:56", Dhuhr: "12:10", Asr: "15:31", Maghrib: "18:05", Isha: "19:18" },
"2025-10-06": { Fajr: "04:56", Dhuhr: "12:10", Asr: "15:30", Maghrib: "18:04", Isha: "19:17" },
"2025-10-07": { Fajr: "04:57", Dhuhr: "12:10", Asr: "15:29", Maghrib: "18:02", Isha: "19:16" },
"2025-10-08": { Fajr: "04:57", Dhuhr: "12:09", Asr: "15:29", Maghrib: "18:01", Isha: "19:15" },
"2025-10-09": { Fajr: "04:57", Dhuhr: "12:09", Asr: "15:28", Maghrib: "18:01", Isha: "19:14" },
"2025-10-10": { Fajr: "04:58", Dhuhr: "12:09", Asr: "15:27", Maghrib: "18:00", Isha: "19:13" },
"2025-10-11": { Fajr: "04:58", Dhuhr: "12:09", Asr: "15:27", Maghrib: "17:59", Isha: "19:12" },
"2025-10-12": { Fajr: "04:59", Dhuhr: "12:08", Asr: "15:26", Maghrib: "17:58", Isha: "19:12" },
"2025-10-13": { Fajr: "04:59", Dhuhr: "12:08", Asr: "15:26", Maghrib: "17:57", Isha: "19:11" },
"2025-10-14": { Fajr: "05:00", Dhuhr: "12:08", Asr: "15:25", Maghrib: "17:56", Isha: "19:10" },
"2025-10-15": { Fajr: "05:00", Dhuhr: "12:08", Asr: "15:24", Maghrib: "17:55", Isha: "19:09" },
"2025-10-16": { Fajr: "05:00", Dhuhr: "12:07", Asr: "15:24", Maghrib: "17:54", Isha: "19:08" },
"2025-10-17": { Fajr: "05:01", Dhuhr: "12:07", Asr: "15:23", Maghrib: "17:53", Isha: "19:07" },
"2025-10-18": { Fajr: "05:01", Dhuhr: "12:07", Asr: "15:23", Maghrib: "17:52", Isha: "19:06" },
"2025-10-19": { Fajr: "05:02", Dhuhr: "12:07", Asr: "15:22", Maghrib: "17:51", Isha: "19:06" },
"2025-10-20": { Fajr: "05:02", Dhuhr: "12:07", Asr: "15:21", Maghrib: "17:50", Isha: "19:05" },
"2025-10-21": { Fajr: "05:03", Dhuhr: "12:06", Asr: "15:21", Maghrib: "17:49", Isha: "19:04" },
"2025-10-22": { Fajr: "05:03", Dhuhr: "12:06", Asr: "15:20", Maghrib: "17:49", Isha: "19:03" },
"2025-10-23": { Fajr: "05:04", Dhuhr: "12:06", Asr: "15:20", Maghrib: "17:48", Isha: "19:02" },
"2025-10-24": { Fajr: "05:04", Dhuhr: "12:06", Asr: "15:19", Maghrib: "17:47", Isha: "19:02" },
"2025-10-25": { Fajr: "05:05", Dhuhr: "12:06", Asr: "15:19", Maghrib: "17:46", Isha: "19:01" },
"2025-10-26": { Fajr: "05:05", Dhuhr: "12:06", Asr: "15:18", Maghrib: "17:45", Isha: "19:00" },
"2025-10-27": { Fajr: "05:05", Dhuhr: "12:06", Asr: "15:18", Maghrib: "17:45", Isha: "19:00" },
"2025-10-28": { Fajr: "05:06", Dhuhr: "12:06", Asr: "15:17", Maghrib: "17:44", Isha: "18:59" },
"2025-10-29": { Fajr: "05:06", Dhuhr: "12:06", Asr: "15:16", Maghrib: "17:43", Isha: "18:58" },
"2025-10-30": { Fajr: "05:07", Dhuhr: "12:06", Asr: "15:16", Maghrib: "17:43", Isha: "18:58" },
"2025-10-31": { Fajr: "05:07", Dhuhr: "12:05", Asr: "15:16", Maghrib: "17:42", Isha: "18:57" },
"2025-11-01": { Fajr: "05:08", Dhuhr: "12:05", Asr: "15:15", Maghrib: "17:41", Isha: "18:57" },
"2025-11-02": { Fajr: "05:08", Dhuhr: "12:05", Asr: "15:15", Maghrib: "17:41", Isha: "18:56" },
"2025-11-03": { Fajr: "05:09", Dhuhr: "12:05", Asr: "15:14", Maghrib: "17:40", Isha: "18:56" },
"2025-11-04": { Fajr: "05:10", Dhuhr: "12:05", Asr: "15:14", Maghrib: "17:39", Isha: "18:55" },
"2025-11-05": { Fajr: "05:10", Dhuhr: "12:05", Asr: "15:13", Maghrib: "17:39", Isha: "18:55" },
"2025-11-06": { Fajr: "05:11", Dhuhr: "12:05", Asr: "15:13", Maghrib: "17:38", Isha: "18:54" },
"2025-11-07": { Fajr: "05:11", Dhuhr: "12:06", Asr: "15:13", Maghrib: "17:38", Isha: "18:54" },
"2025-11-08": { Fajr: "05:12", Dhuhr: "12:06", Asr: "15:12", Maghrib: "17:37", Isha: "18:53" },
"2025-11-09": { Fajr: "05:12", Dhuhr: "12:06", Asr: "15:12", Maghrib: "17:37", Isha: "18:53" },
"2025-11-10": { Fajr: "05:13", Dhuhr: "12:06", Asr: "15:11", Maghrib: "17:36", Isha: "18:53" },
"2025-11-11": { Fajr: "05:13", Dhuhr: "12:06", Asr: "15:11", Maghrib: "17:36", Isha: "18:52" },
"2025-11-12": { Fajr: "05:14", Dhuhr: "12:06", Asr: "15:11", Maghrib: "17:35", Isha: "18:52" },
"2025-11-13": { Fajr: "05:14", Dhuhr: "12:06", Asr: "15:11", Maghrib: "17:35", Isha: "18:52" },
"2025-11-14": { Fajr: "05:15", Dhuhr: "12:06", Asr: "15:10", Maghrib: "17:34", Isha: "18:51" },
"2025-11-15": { Fajr: "05:16", Dhuhr: "12:06", Asr: "15:10", Maghrib: "17:34", Isha: "18:51" },
"2025-11-16": { Fajr: "05:16", Dhuhr: "12:07", Asr: "15:10", Maghrib: "17:34", Isha: "18:51" },
"2025-11-17": { Fajr: "05:17", Dhuhr: "12:07", Asr: "15:10", Maghrib: "17:33", Isha: "18:51" },
"2025-11-18": { Fajr: "05:17", Dhuhr: "12:07", Asr: "15:09", Maghrib: "17:33", Isha: "18:50" },
"2025-11-19": { Fajr: "05:18", Dhuhr: "12:07", Asr: "15:09", Maghrib: "17:33", Isha: "18:50" },
"2025-11-20": { Fajr: "05:19", Dhuhr: "12:07", Asr: "15:09", Maghrib: "17:33", Isha: "18:50" },
"2025-11-21": { Fajr: "05:19", Dhuhr: "12:08", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-22": { Fajr: "05:20", Dhuhr: "12:08", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-23": { Fajr: "05:20", Dhuhr: "12:08", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-24": { Fajr: "05:21", Dhuhr: "12:09", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-25": { Fajr: "05:22", Dhuhr: "12:09", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-26": { Fajr: "05:22", Dhuhr: "12:09", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-27": { Fajr: "05:23", Dhuhr: "12:10", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-28": { Fajr: "05:23", Dhuhr: "12:10", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-29": { Fajr: "05:24", Dhuhr: "12:10", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-11-30": { Fajr: "05:25", Dhuhr: "12:11", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-12-01": { Fajr: "05:25", Dhuhr: "12:11", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-12-02": { Fajr: "05:26", Dhuhr: "12:11", Asr: "15:09", Maghrib: "17:32", Isha: "18:50" },
"2025-12-03": { Fajr: "05:27", Dhuhr: "12:12", Asr: "15:09", Maghrib: "17:32", Isha: "18:51" },
"2025-12-04": { Fajr: "05:27", Dhuhr: "12:12", Asr: "15:09", Maghrib: "17:32", Isha: "18:51" },
"2025-12-05": { Fajr: "05:28", Dhuhr: "12:12", Asr: "15:09", Maghrib: "17:32", Isha: "18:51" },
"2025-12-06": { Fajr: "05:28", Dhuhr: "12:13", Asr: "15:10", Maghrib: "17:32", Isha: "18:51" },
"2025-12-07": { Fajr: "05:29", Dhuhr: "12:13", Asr: "15:10", Maghrib: "17:32", Isha: "18:52" },
"2025-12-08": { Fajr: "05:30", Dhuhr: "12:14", Asr: "15:10", Maghrib: "17:33", Isha: "18:52" },
"2025-12-09": { Fajr: "05:30", Dhuhr: "12:14", Asr: "15:10", Maghrib: "17:33", Isha: "18:52" },
"2025-12-10": { Fajr: "05:31", Dhuhr: "12:15", Asr: "15:11", Maghrib: "17:33", Isha: "18:52" },
"2025-12-11": { Fajr: "05:31", Dhuhr: "12:15", Asr: "15:11", Maghrib: "17:33", Isha: "18:53" },
"2025-12-12": { Fajr: "05:32", Dhuhr: "12:16", Asr: "15:11", Maghrib: "17:34", Isha: "18:53" },
"2025-12-13": { Fajr: "05:33", Dhuhr: "12:16", Asr: "15:11", Maghrib: "17:34", Isha: "18:53" },
"2025-12-14": { Fajr: "05:33", Dhuhr: "12:17", Asr: "15:12", Maghrib: "17:34", Isha: "18:54" },
"2025-12-15": { Fajr: "05:34", Dhuhr: "12:17", Asr: "15:12", Maghrib: "17:35", Isha: "18:54" },
"2025-12-16": { Fajr: "05:34", Dhuhr: "12:18", Asr: "15:13", Maghrib: "17:35", Isha: "18:55" },
"2025-12-17": { Fajr: "05:35", Dhuhr: "12:18", Asr: "15:13", Maghrib: "17:36", Isha: "18:55" },
"2025-12-18": { Fajr: "05:35", Dhuhr: "12:18", Asr: "15:13", Maghrib: "17:36", Isha: "18:56" },
"2025-12-19": { Fajr: "05:36", Dhuhr: "12:19", Asr: "15:14", Maghrib: "17:36", Isha: "18:56" },
"2025-12-20": { Fajr: "05:36", Dhuhr: "12:19", Asr: "15:14", Maghrib: "17:37", Isha: "18:56" },
"2025-12-21": { Fajr: "05:37", Dhuhr: "12:20", Asr: "15:15", Maghrib: "17:37", Isha: "18:57" },
"2025-12-22": { Fajr: "05:37", Dhuhr: "12:20", Asr: "15:15", Maghrib: "17:38", Isha: "18:57" },
"2025-12-23": { Fajr: "05:38", Dhuhr: "12:21", Asr: "15:16", Maghrib: "17:38", Isha: "18:58" },
"2025-12-24": { Fajr: "05:38", Dhuhr: "12:21", Asr: "15:16", Maghrib: "17:39", Isha: "18:58" },
"2025-12-25": { Fajr: "05:39", Dhuhr: "12:22", Asr: "15:17", Maghrib: "17:39", Isha: "18:59" },
"2025-12-26": { Fajr: "05:39", Dhuhr: "12:22", Asr: "15:17", Maghrib: "17:40", Isha: "19:00" },
"2025-12-27": { Fajr: "05:40", Dhuhr: "12:23", Asr: "15:18", Maghrib: "17:41", Isha: "19:00" },
"2025-12-28": { Fajr: "05:40", Dhuhr: "12:23", Asr: "15:18", Maghrib: "17:41", Isha: "19:01" },
"2025-12-29": { Fajr: "05:41", Dhuhr: "12:24", Asr: "15:19", Maghrib: "17:42", Isha: "19:01" },
"2025-12-30": { Fajr: "05:41", Dhuhr: "12:24", Asr: "15:20", Maghrib: "17:42", Isha: "19:02" },
"2025-12-31": { Fajr: "05:41", Dhuhr: "12:25", Asr: "15:20", Maghrib: "17:43", Isha: "19:02" }
};

const iqamahDelays = {
  Fajr: 20,
  Dhuhr: 20,
  Asr: 20,
  Maghrib: 7,
  Isha: 20
};

function getTodayDateString() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function addMinutesToTime(timeStr, minutesToAdd) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  let date = new Date();
  date.setHours(hours, minutes + minutesToAdd, 0, 0);
  return date;
}

function formatTo12Hour(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

function renderPrayerTable(prayers) {
  const tbody = document.getElementById("prayerTableBody");
  tbody.innerHTML = "";

  for (const prayer of ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"]) {
    const adhanTime24 = prayers[prayer];
    const adhanDate = addMinutesToTime(adhanTime24, 0);
    const adhanTime12 = formatTo12Hour(adhanDate);

    const iqamahDate = addMinutesToTime(adhanTime24, iqamahDelays[prayer]);
    const iqamahTime12 = formatTo12Hour(iqamahDate);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${prayer}</td>
      <td>${adhanTime12}</td>
      <td>${iqamahTime12}</td>
    `;
    tbody.appendChild(row);
  }
}

function getNextIqamah(prayers) {
  const now = new Date();

  for (const prayer of ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"]) {
    const adhanTime24 = prayers[prayer];
    const iqamahDate = addMinutesToTime(adhanTime24, iqamahDelays[prayer]);
    if (iqamahDate > now) {
      return { name: prayer, time: iqamahDate };
    }
  }
  return null;
}

function updateCountdown(prayers) {
  const countdownEl = document.getElementById("countdown");
  const nextPrayerEl = document.getElementById("nextPrayer");

  const nextIqamah = getNextIqamah(prayers);
  if (!nextIqamah) {
    countdownEl.textContent = "No upcoming prayers today.";
    nextPrayerEl.textContent = "";
    return;
  }

  const diffMs = nextIqamah.time - new Date();
  const diffSec = Math.floor(diffMs / 1000);
  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  countdownEl.textContent = `Iqamah countdown: ${hours}h ${minutes}m ${seconds}s`;
  nextPrayerEl.textContent = `Next Iqamah: ${nextIqamah.name} at ${formatTo12Hour(nextIqamah.time)}`;
}

function startApp() {
  const today = getTodayDateString();
  const prayersToday = prayerSchedule[today];
  if (!prayersToday) {
    document.body.innerHTML = `<p>No prayer schedule available for today (${today}).</p>`;
    return;
  }

  renderPrayerTable(prayersToday);
  updateCountdown(prayersToday);
  setInterval(() => updateCountdown(prayersToday), 1000);
}

startApp();
