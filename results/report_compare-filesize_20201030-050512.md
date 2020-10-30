# QGIS Benchmark summary compare-filesize (20201030-050512)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 41m 58s_

_Sample size per configuration 785_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201030-050512_plot.html)

## Summary
| name                                   | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |                377.7 | +0.0%                        |         3539.6 | +0.0%                  |         10453   | +0.0%                   |         4802 |        14855 |           785 |            0 |     5006.9 |    4153.07 |     3896.9 |      43.1 |   23.4667 |      12.8 |          0 |
| qgis310-bigfile                        | Global  |               2044.1 | +441.2%                      |        20004.6 | +465.2%                |         63555.5 | +508.0%                 |         7605 |        88948 |           785 |            0 |     8358.6 |    5509.93 |     4510.2 |      44.1 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile-hugecache              | Global  |               2046.5 | +441.8%                      |        20029.2 | +465.9%                |         63358   | +506.1%                 |         7651 |        89110 |           785 |            0 |     8154.8 |    5480.53 |     4477.1 |      41.3 |   14.4333 |      12.3 |          0 |
| qgis310-bigfile-bigcache               | Global  |               2048.2 | +442.3%                      |        20046   | +466.3%                |         64011.5 | +512.4%                 |         7755 |        89009 |           785 |            0 |     8438.8 |    5494.57 |     4490.6 |      39.4 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |               2069.3 | +447.9%                      |        20250.1 | +472.1%                |         64957   | +521.4%                 |         9908 |        90554 |           785 |            0 |     8282.4 |    5447.83 |     4513.8 |      38.8 |   14.5333 |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |               2069.9 | +448.0%                      |        20259.6 | +472.4%                |         64017.5 | +512.4%                 |         7549 |        88967 |           785 |            0 |     8448.6 |    5508.93 |     4499.5 |      38.6 |   14.4333 |      12.3 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |               2099.8 | +455.9%                      |        20544   | +480.4%                |         65301.5 | +524.7%                 |         9927 |        90821 |           785 |            0 |     8248.9 |    5422.23 |     4478.1 |      38.5 |   14.2667 |      12.3 |          0 |

## Aggregated
| name                                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile > somap310_fix                        | somap_fix                |               2044.1 | +0.0%                        |        20004.6 | +0.0%                  |         63555.5 | +0.3%                   |         7605 |        88948 |           785 |            0 |     8358.6 |    5509.93 |     4510.2 |      44.1 |   14.5667 |      12.4 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |               2046.5 | +0.1%                        |        20029.2 | +0.1%                  |         63358   | +0.0%                   |         7651 |        89110 |           785 |            0 |     8154.8 |    5480.53 |     4477.1 |      41.3 |   14.4333 |      12.3 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |               2048.2 | +0.2%                        |        20046   | +0.2%                  |         64011.5 | +1.0%                   |         7755 |        89009 |           785 |            0 |     8438.8 |    5494.57 |     4490.6 |      39.4 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |               2069.3 | +1.2%                        |        20250.1 | +1.2%                  |         64957   | +2.5%                   |         9908 |        90554 |           785 |            0 |     8282.4 |    5447.83 |     4513.8 |      38.8 |   14.5333 |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |               2069.9 | +1.3%                        |        20259.6 | +1.3%                  |         64017.5 | +1.0%                   |         7549 |        88967 |           785 |            0 |     8448.6 |    5508.93 |     4499.5 |      38.6 |   14.4333 |      12.3 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |               2099.8 | +2.7%                        |        20544   | +2.7%                  |         65301.5 | +3.1%                   |         9927 |        90821 |           785 |            0 |     8248.9 |    5422.23 |     4478.1 |      38.5 |   14.2667 |      12.3 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |                350.1 | +0.0%                        |         3423.8 | +0.0%                  |          4826   | +0.0%                   |         2004 |         7777 |           735 |            0 |     5006.9 |    4421.8  |     3991.7 |      43.1 |   20.1    |      12.8 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |                 19   | +0.0%                        |           97.7 | +0.0%                  |          4942.5 | +0.0%                   |         2532 |         6237 |            20 |            0 |     4188.5 |    4090.6  |     4063.3 |      37.2 |   20.3    |      15.3 |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |                  8.6 | +0.0%                        |           18.1 | +0.0%                  |           684.5 | +0.0%                   |          266 |          841 |            30 |            0 |     3972.7 |    3946.8  |     3896.9 |      34.6 |   30      |      20.9 |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |               1934.8 | +0.0%                        |        19207.2 | +0.0%                  |         27159   | +0.0%                   |           735 |            0 |          0 |     26132.3   |         3250 |        45476 |       29671   |      31971.4  |      42903.3  |     0.380989 |                70.5685 |           0.162166 |     8358.6 |     6101.6 |     4513.3 |      34   |      14.3 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |               1937.1 | +0.1%                        |        19230.8 | +0.1%                  |         27199   | +0.1%                   |           735 |            0 |          0 |     26164.3   |         3129 |        45280 |       29918.8 |      32086.6  |      43426.1  |     0.38049  |                70.4771 |           0.161954 |     8154.8 |     6065.4 |     4503.8 |      34.8 |      14.3 |      12.3 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |               1938.2 | +0.2%                        |        19242.1 | +0.2%                  |         27263   | +0.4%                   |           735 |            0 |          0 |     26179.7   |         3126 |        45143 |       29864.2 |      32128.8  |      43131.6  |     0.380303 |                70.4417 |           0.161874 |     8438.8 |     6070.2 |     4563.3 |      39.4 |      14.1 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |               1957.1 | +1.2%                        |        19428.5 | +1.2%                  |         27336   | +0.7%                   |           735 |            0 |          0 |     26433.3   |         3184 |        45692 |       30362.6 |      32335.4  |      43382.6  |     0.376653 |                69.7657 |           0.16032  |     8282.4 |     6044.8 |     4513.8 |      38.8 |      14.2 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |               1959.4 | +1.3%                        |        19456.2 | +1.3%                  |         27441   | +1.0%                   |           735 |            0 |          0 |     26471     |         3086 |        44825 |       30544.2 |      32312.6  |      42951.4  |     0.376168 |                69.6765 |           0.160114 |     8448.6 |     6107.9 |     4540.3 |      38   |      14.2 |      12.3 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |               1986.8 | +2.7%                        |        19721.7 | +2.7%                  |         27760   | +2.2%                   |           735 |            0 |          0 |     26832.3   |         3221 |        45870 |       30706.8 |      32826.2  |      43854.5  |     0.370986 |                68.7156 |           0.157908 |     8248.9 |     6014.2 |     4486.3 |      38.5 |      14.2 |      12.3 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |                 53.9 | +0.0%                        |          372.9 | +0.0%                  |         19700.5 | +0.0%                   |            20 |            0 |          0 |     18646     |         2476 |        26517 |       26443.9 |      26513.6  |      26517    |     0.409609 |               199.481  |           0.167124 |     7577.7 |     5904.3 |     5690.7 |      44.1 |      15.1 |      12.6 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |                 54.3 | +0.7%                        |          376.2 | +0.9%                  |         19885   | +0.9%                   |            20 |            0 |          0 |     18809.3   |         2527 |        26893 |       26700.8 |      26883.5  |      26893    |     0.40739  |               198.399  |           0.166218 |     7397.4 |     5889.1 |     5720.5 |      41.3 |      14.8 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |                 54.5 | +1.1%                        |          379.7 | +1.8%                  |         20181.5 | +2.4%                   |            20 |            0 |          0 |     18984.8   |         2624 |        26789 |       26487.2 |      26774.4  |      26789    |     0.40526  |               197.362  |           0.165349 |     7514.9 |     5862.7 |     5669.9 |      39.2 |      14.8 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |                 54.8 | +1.7%                        |          378.5 | +1.5%                  |         20063   | +1.8%                   |            20 |            0 |          0 |     18924.8   |         2411 |        27287 |       27128.7 |      27279.5  |      27287    |     0.403763 |               196.633  |           0.164738 |     7575.7 |     5897.6 |     5713.2 |      38.6 |      14.8 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |                 55.8 | +3.5%                        |          388.7 | +4.2%                  |         20799   | +5.6%                   |            20 |            0 |          0 |     19435     |         4684 |        27643 |       27364   |      27630    |      27643    |     0.395319 |               192.522  |           0.161293 |     7255.6 |     5748.4 |     5601.9 |      36.2 |      14.9 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |                 56.4 | +4.6%                        |          390.1 | +4.6%                  |         20563.5 | +4.4%                   |            20 |            0 |          0 |     19505.5   |         4708 |        27785 |       27609   |      27776.3  |      27785    |     0.393244 |               191.51   |           0.160447 |     7403.2 |     5770.3 |     5588.6 |      36.5 |      14.7 |      12.6 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |                 55.1 | +0.0%                        |          422.2 | +0.0%                  |         16274   | +0.0%                   |            30 |            0 |          0 |     14072.9   |         1995 |        16937 |       16879.2 |      16928.8  |      16937    |     0.601082 |                16.2934 |           0.245794 |     4516.4 |     4487.1 |     4477.1 |      37.5 |      14.2 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |                 55.4 | +0.5%                        |          424.4 | +0.5%                  |         16696   | +2.6%                   |            30 |            0 |          0 |     14148.3   |         1879 |        16955 |       16874.8 |      16927.5  |      16955    |     0.596338 |                16.1648 |           0.243854 |     4551.2 |     4523.9 |     4510.2 |      39.6 |      14.3 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |                 55.5 | +0.7%                        |          424.2 | +0.5%                  |         16567   | +1.8%                   |            30 |            0 |          0 |     14139.4   |         2005 |        17077 |       16972.1 |      17058.8  |      17077    |     0.595829 |                16.151  |           0.243646 |     4575.7 |     4550.8 |     4490.6 |      38.2 |      14.4 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |                 55.7 | +1.1%                        |          425   | +0.7%                  |         16513.5 | +1.5%                   |            30 |            0 |          0 |     14165.8   |         2052 |        16855 |       16831.2 |      16854.5  |      16855    |     0.597134 |                16.1864 |           0.24418  |     4544.8 |     4521.3 |     4499.5 |      34   |      14.3 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |                 56.4 | +2.4%                        |          433   | +2.6%                  |         16822   | +3.4%                   |            30 |            0 |          0 |     14432.2   |         2040 |        17219 |       17187.6 |      17208.5  |      17219    |     0.588085 |                15.9411 |           0.240479 |     4571.4 |     4550.3 |     4518.2 |      35.2 |      14.5 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |                 56.6 | +2.7%                        |          432.2 | +2.4%                  |         16978   | +4.3%                   |            30 |            0 |          0 |     14406     |         1998 |        17166 |       17116.1 |      17152.8  |      17166    |     0.584624 |                15.8473 |           0.239064 |     4496.7 |     4482.2 |     4478.1 |      34.2 |      13.9 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201030-050512/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |                350.1 | +0.0%                        |         3423.8 | +0.0%                  |          4826   | +0.0%                   |           735 |            0 |          0 |      4658.25  |         2004 |         7777 |        5897.6 |       6646.2  |       7456.28 |     2.13337  |               312.213  |           0.939306 |     5006.9 |     4421.8 |     3991.7 |      43.1 |      20.1 |      12.8 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201030-050512/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |                 19   | +0.0%                        |           97.7 | +0.0%                  |          4942.5 | +0.0%                   |            20 |            0 |          0 |      4887.35  |         2532 |         6237 |        6134.8 |       6232.15 |       6237    |     1.55642  |               484.279  |           0.651751 |     4188.5 |     4090.6 |     4063.3 |      37.2 |      20.3 |      15.3 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201030-050512/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |                  8.6 | +0.0%                        |           18.1 | +0.0%                  |           684.5 | +0.0%                   |            30 |            0 |          0 |       601.833 |          266 |          841 |         789.5 |        821.2  |        841    |    11.9856   |               324.892  |           4.88945  |     3972.7 |     3946.8 |     3896.9 |      34.6 |      30   |      20.9 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare the effect of different QGIS project file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f_big.txt
        - av_sw.txt

  qgis310-bigfile-bigcache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-bigfile-hugecache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'

  qgis310-bigfile-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-bigcache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-hugecache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-smallfile:
    inherit: qgis310-bigfile
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```