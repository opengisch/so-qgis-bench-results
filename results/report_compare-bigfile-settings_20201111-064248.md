# QGIS Benchmark summary compare-bigfile-settings (20201111-064248)


compare the effect of different QGIS settings with big file size in QGIS 3.10

_run completed in 00h 27m 27s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-bigfile-settings_20201111-064248_plot.html)

## Summary
| name                                   | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache              | Global  |            181.2 | +0.0%                    |              70.5 | +0.0%                     |         1349.7 | +0.0%                  |         65326   | +0.0%                   |         7965 |        76541 |             13.1 |            72 |            0 |     4844.2 |    3182.6  |     2973.2 |      40   |   14.4    |      12.5 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |            182.4 | +0.7%                    |              70.7 | +0.3%                     |         1356.6 | +0.5%                  |         65371   | +0.1%                   |         8344 |        76830 |             13.1 |            72 |            0 |     4833.4 |    3159.5  |     2974.4 |      37.7 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache               | Global  |            182.8 | +0.9%                    |              70.6 | +0.1%                     |         1358.5 | +0.7%                  |         65477.5 | +0.3%                   |         8373 |        77545 |             13.1 |            72 |            0 |     4929.9 |    3178.07 |     2961.2 |      39.1 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |            183.3 | +1.2%                    |              71.6 | +1.6%                     |         1362.4 | +0.9%                  |         65297.5 | +0.0%                   |         7886 |        77581 |             13.1 |            72 |            0 |     4895.6 |    3177.47 |     2936.5 |      40.9 |   14.5333 |      12.5 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |            185.9 | +2.6%                    |              72.5 | +2.8%                     |         1378.5 | +2.1%                  |         66606.5 | +2.0%                   |         7539 |        78861 |             13.1 |            72 |            0 |     5176.4 |    3175.3  |     2916.6 |      34.2 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |            186.7 | +3.0%                    |              72.2 | +2.4%                     |         1387   | +2.8%                  |         66937.5 | +2.5%                   |         8176 |        78416 |             13.1 |            72 |            0 |     5101.7 |    3171.83 |     2957.6 |      39.6 |   14.3667 |      12.4 |          0 |

## Aggregated
| name                                                  | group     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix |            181.2 | +0.0%                    |              70.5 | +0.0%                     |         1349.7 | +0.0%                  |         65326   | +0.0%                   |         7965 |        76541 |             13.1 |            72 |            0 |     4844.2 |    3182.6  |     2973.2 |      40   |   14.4    |      12.5 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix |            182.4 | +0.7%                    |              70.7 | +0.3%                     |         1356.6 | +0.5%                  |         65371   | +0.1%                   |         8344 |        76830 |             13.1 |            72 |            0 |     4833.4 |    3159.5  |     2974.4 |      37.7 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix |            182.8 | +0.9%                    |              70.6 | +0.1%                     |         1358.5 | +0.7%                  |         65477.5 | +0.3%                   |         8373 |        77545 |             13.1 |            72 |            0 |     4929.9 |    3178.07 |     2961.2 |      39.1 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix |            183.3 | +1.2%                    |              71.6 | +1.6%                     |         1362.4 | +0.9%                  |         65297.5 | +0.0%                   |         7886 |        77581 |             13.1 |            72 |            0 |     4895.6 |    3177.47 |     2936.5 |      40.9 |   14.5333 |      12.5 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix |            185.9 | +2.6%                    |              72.5 | +2.8%                     |         1378.5 | +2.1%                  |         66606.5 | +2.0%                   |         7539 |        78861 |             13.1 |            72 |            0 |     5176.4 |    3175.3  |     2916.6 |      34.2 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix |            186.7 | +3.0%                    |              72.2 | +2.4%                     |         1387   | +2.8%                  |         66937.5 | +2.5%                   |         8176 |        78416 |             13.1 |            72 |            0 |     5101.7 |    3171.83 |     2957.6 |      39.6 |   14.3667 |      12.4 |          0 |

## Detail
| name                                                                                                                                                                                                                | group                 |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                                 | somap_fix > av_f.txt  |             67.4 | +0.0%                    |               0.1 | +0.0%                     |          513.3 | +0.2%                  |         26714   | +0.0%                   |            22 |            0 |          0 |       23330.4 |         3238 |        31041 |       30825   |       31016.7 |         31041 |     0.353357 |                46.2337 |           0.145402 |              2.8 |     3802.1 |     3216.4 |     2978.3 |      40.9 |      15   |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache/somap310_fix/av_f.txt/dashboard/index.html)                             | somap_fix > av_f.txt  |             67.4 | +0.0%                    |               0.1 | +0.0%                     |          515.1 | +0.5%                  |         26812.5 | +0.4%                   |            22 |            0 |          0 |       23414.8 |         3434 |        31241 |       31022   |       31220.3 |         31241 |     0.35222  |                46.0849 |           0.144934 |              2.8 |     3981.1 |     3251.4 |     2980.3 |      31.2 |      15   |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)                       | somap_fix > av_f.txt  |             67.5 | +0.1%                    |               0.1 | +0.0%                     |          512.3 | +0.0%                  |         26725   | +0.0%                   |            22 |            0 |          0 |       23287.4 |         3589 |        30813 |       30504   |       30768.5 |         30813 |     0.352237 |                46.0871 |           0.144941 |              2.8 |     3947.2 |     3189.1 |     2983.2 |      34.3 |      14.9 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache/somap310_fix/av_f.txt/dashboard/index.html)                               | somap_fix > av_f.txt  |             68   | +0.9%                    |               0.1 | +0.0%                     |          517.4 | +1.0%                  |         26985.5 | +1.0%                   |            22 |            0 |          0 |       23517.1 |         3402 |        31564 |       30972.7 |       31495.6 |         31564 |     0.350224 |                45.8237 |           0.144113 |              2.8 |     3991.5 |     3225.9 |     2979.5 |      38.2 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |             68   | +0.9%                    |               0.1 | +0.0%                     |          514.8 | +0.5%                  |         26943   | +0.9%                   |            22 |            0 |          0 |       23398.8 |         3382 |        30999 |       30685   |       30963.1 |         30999 |     0.350229 |                45.8245 |           0.144115 |              2.8 |     4007.8 |     3224.5 |     2965.2 |      34.1 |      15.1 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)     | somap_fix > av_f.txt  |             69.2 | +2.7%                    |               0.1 | +0.0%                     |          522.3 | +2.0%                  |         27251   | +2.0%                   |            22 |            0 |          0 |       23742.6 |         3382 |        31452 |       31293.6 |       31435.8 |         31452 |     0.344202 |                45.0358 |           0.141635 |              2.8 |     4055.1 |     3223.6 |     2972.3 |      39.6 |      14.9 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                             | somap_fix > av_sw.txt |             56.4 | +0.0%                    |               0.1 | +0.0%                     |          392.9 | +0.0%                  |         21009   | +0.7%                   |            20 |            0 |          0 |       19644.1 |         2601 |        28138 |       27758   |       28119.2 |         28138 |     0.390732 |               190.356  |           0.159422 |              9.5 |     4929.9 |     3325.6 |     3076.1 |      39.1 |      14.6 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                               | somap_fix > av_sw.txt |             56.5 | +0.2%                    |               0.1 | +0.0%                     |          394.2 | +0.3%                  |         20866   | +0.0%                   |            20 |            0 |          0 |       19711.8 |         2660 |        28308 |       28133.2 |       28299.9 |         28308 |     0.387913 |               188.983  |           0.158271 |              9.5 |     4895.6 |     3328.5 |     3074.6 |      27.6 |      14.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt |             56.6 | +0.4%                    |               0.1 | +0.0%                     |          394.6 | +0.4%                  |         21245   | +1.8%                   |            20 |            0 |          0 |       19732.3 |         2561 |        27888 |       27813.7 |       27884.3 |         27888 |     0.388757 |               189.395  |           0.158616 |              9.5 |     4844.2 |     3312   |     3088.2 |      40   |      14.5 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                     | somap_fix > av_sw.txt |             56.9 | +0.9%                    |               0.1 | +0.0%                     |          396.7 | +1.0%                  |         21279   | +2.0%                   |            20 |            0 |          0 |       19835.7 |         2655 |        28311 |       28063.2 |       28299   |         28311 |     0.386018 |               188.061  |           0.157499 |              9.5 |     4833.4 |     3303.7 |     3032.2 |      37.7 |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)   | somap_fix > av_sw.txt |             57.8 | +2.5%                    |               0.1 | +0.0%                     |          403.6 | +2.7%                  |         21755   | +4.3%                   |            20 |            0 |          0 |       20179.2 |         2646 |        28750 |       28477.3 |       28736.9 |         28750 |     0.380525 |               185.384  |           0.155257 |              9.5 |     5101.7 |     3320.6 |     3076.5 |      35.7 |      14.5 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |             58.4 | +3.5%                    |               0.1 | +0.0%                     |          405.9 | +3.3%                  |         21703   | +4.0%                   |            20 |            0 |          0 |       20296.2 |         2075 |        29355 |       29170.1 |       29346.3 |         29355 |     0.375446 |               182.909  |           0.153185 |              9.5 |     5176.4 |     3337.8 |     3052.5 |      28.9 |      14.7 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt    |             57.2 | +0.0%                    |              70.3 | +0.0%                     |          439.9 | +0.0%                  |         17268.5 | +0.0%                   |            30 |            0 |          0 |       14664.7 |         1970 |        17412 |       17399.9 |       17410.3 |         17412 |     0.574768 |                15.5801 |           0.235034 |              0.8 |     3013   |     2984.4 |     2973.2 |      36.7 |      13.7 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                           | somap_fix > lk.txt    |             58   | +1.4%                    |              70.5 | +0.3%                     |          447.5 | +1.7%                  |         17367   | +0.6%                   |            30 |            0 |          0 |       14917.3 |         2100 |        17706 |       17697.8 |       17704.9 |         17706 |     0.567387 |                15.3801 |           0.232015 |              0.8 |     3011.8 |     2985.7 |     2974.4 |      36.7 |      13.7 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                   | somap_fix > lk.txt    |             58.4 | +2.1%                    |              70.4 | +0.1%                     |          448.3 | +1.9%                  |         17483   | +1.2%                   |            30 |            0 |          0 |       14942.6 |         2370 |        17843 |       17725.7 |       17788.5 |         17843 |     0.562905 |                15.2586 |           0.230183 |              0.8 |     3005.4 |     2982.7 |     2961.2 |      28.3 |      13.7 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                     | somap_fix > lk.txt    |             59.4 | +3.8%                    |              71.4 | +1.6%                     |          454.9 | +3.4%                  |         17717.5 | +2.6%                   |            30 |            0 |          0 |       15164.7 |         1988 |        18232 |       18121.8 |       18197.9 |         18232 |     0.554426 |                15.0287 |           0.226716 |              0.8 |     3009.3 |     2987.5 |     2936.5 |      36.1 |      14   |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |             59.5 | +4.0%                    |              72.3 | +2.8%                     |          457.8 | +4.1%                  |         17960.5 | +4.0%                   |            30 |            0 |          0 |       15261.1 |         2082 |        18507 |       18371.5 |       18487.2 |         18507 |     0.551298 |                14.944  |           0.225437 |              0.8 |     2980.7 |     2963.6 |     2916.6 |      34.2 |      13.7 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201111-064248/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)         | somap_fix > lk.txt    |             59.7 | +4.4%                    |              72   | +2.4%                     |          461.1 | +4.8%                  |         17931.5 | +3.8%                   |            30 |            0 |          0 |       15368.9 |         2148 |        18214 |       18169.2 |       18210.7 |         18214 |     0.550085 |                14.9111 |           0.22494  |              0.8 |     2995.8 |     2971.3 |     2957.6 |      35.9 |      13.7 |      12.5 |

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
description: 'compare the effect of different QGIS settings with big file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10-ubuntu'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f.txt
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

```
### parsed test configurations

```
description: compare the effect of different QGIS settings with big file size in QGIS
  3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
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
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
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
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
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
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
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
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx

```