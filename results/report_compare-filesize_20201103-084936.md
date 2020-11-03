# QGIS Benchmark summary compare-filesize (20201103-084936)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 14m 14s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201103-084936_plot.html)

## Summary
| name              | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-smallfile | Global  |                 27.8 | +0.0%                        |           70.9 | +0.0%                  |          2744.5 | +30.0%                  |          777 |         7452 |              9.7 |            72 |            0 |     2899.7 |    2784.8  |     2678   |      98   |   53.9    |      17.1 |          0 |
| qgis218-smallfile | Global  |                 28.2 | +1.4%                        |           74.8 | +5.5%                  |          2817.5 | +33.4%                  |          626 |         7630 |             11.2 |            72 |            0 |     3282.1 |    2869.53 |     2479.2 |      98.1 |   60.0333 |      13.4 |          0 |
| qgis218-bigfile   | Global  |                 37.2 | +33.8%                       |          112.8 | +59.2%                 |          2111.5 | +0.0%                   |          514 |        18289 |              1.6 |            72 |            0 |     6994.7 |    6392.5  |     4383   |      99.8 |   56.8    |      12.4 |          0 |
| qgis316-bigfile   | Global  |                 52.5 | +88.8%                       |          279.4 | +294.3%                |         12850   | +508.6%                 |         5655 |        18742 |             13   |            72 |            0 |     8078.1 |    6574.33 |     6173.6 |      77.4 |   65.0667 |      14.6 |          0 |

## Aggregated
| name                                            | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218_fix                  | somap_fix                |                 37.2 | +0.0%                        |          112.8 | +0.0%                  |          2111.5 | +0.0%                   |          514 |        18289 |              1.6 |            72 |            0 |     6994.7 |    6392.5  |     4383   |      99.8 |   56.8    |      12.4 |          0 |
| qgis316-bigfile > somap316_fix                  | somap_fix                |                 52.5 | +41.1%                       |          279.4 | +147.6%                |         12850   | +508.6%                 |         5655 |        18742 |             13   |            72 |            0 |     8078.1 |    6574.33 |     6173.6 |      77.4 |   65.0667 |      14.6 |          0 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 10.2 | +0.0%                        |           34.7 | +5.5%                  |          1341   | +13.8%                  |          248 |         3646 |              3.4 |            22 |            0 |     3058.9 |    2869.6  |     2608.7 |      98   |   72.4    |      26.2 |          0 |
| qgis316-smallfile > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 10.4 | +2.0%                        |           32.9 | +0.0%                  |          1178   | +0.0%                   |          450 |         3145 |              2.8 |            22 |            0 |     2826.6 |    2806.4  |     2787.3 |      98   |   73.3    |      33.6 |          0 |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |                 10.1 | +0.0%                        |           28.7 | +0.0%                  |          1314.5 | +0.0%                   |          246 |         2816 |              7   |            20 |            0 |     3282.1 |    3168    |     2979.7 |      98.1 |   68.1    |      26.3 |          0 |
| qgis316-smallfile > somap316_grundplanav_sw     | somap_grundplanav_sw     |                 10.2 | +1.0%                        |           31   | +8.1%                  |          1431.5 | +8.9%                   |          265 |         3443 |              6.1 |            20 |            0 |     2899.7 |    2870    |     2829.1 |      97.6 |   71.3    |      25.2 |          0 |
| qgis316-smallfile > somap316_lk                 | somap_lk                 |                  7.2 | +0.0%                        |            7   | +0.0%                  |           135   | +0.0%                   |           62 |          864 |              0.8 |            30 |            0 |     2678   |    2678    |     2678   |      17.1 |   17.1    |      17.1 |          0 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |                  7.9 | +9.7%                        |           11.4 | +63.4%                 |           162   | +20.0%                  |          132 |         1168 |              0.8 |            30 |            0 |     2622.5 |    2571    |     2479.2 |      58.2 |   39.6    |      13.4 |          0 |

## Detail
| name                                                                                                                                                                                          | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218_fix > av_f.txt](../results/details/compare-filesize/20201103-084936/qgis218-bigfile/somap218_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |                 11   | +0.0%                        |           21.7 | +0.0%                  |           784.5 | +0.0%                   |            22 |            0 |          0 |       984.091 |          212 |         4702 |        3464.8 |       4669.6  |          4702 |      4.28432 |               166.673  |           1.76295  |              0.8 |     6908.3 |     6563.9 |     6255.4 |      96.4 |      44.9 |      25.3 |
| [qgis316-bigfile > somap316_fix > av_f.txt](../results/details/compare-filesize/20201103-084936/qgis316-bigfile/somap316_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |                 19   | +72.7%                       |          106.2 | +390.5%                |          4933   | +528.8%                 |            22 |            0 |          0 |      4827.32  |         2040 |         6809 |        6635.5 |       6790.85 |          6809 |      1.65389 |               216.809  |           0.680554 |              2.8 |     8078.1 |     6768.8 |     6173.6 |      75.8 |      65.4 |      27.2 |
| [qgis218-bigfile > somap218_fix > av_sw.txt](../results/details/compare-filesize/20201103-084936/qgis218-bigfile/somap218_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |                  8   | +0.0%                        |           16.5 | +0.0%                  |           904.5 | +0.0%                   |            20 |            0 |          0 |       827.4   |          245 |         1528 |        1345.9 |       1519.9  |          1528 |      9.46522 |               160.78   |           3.86188  |              0.3 |     6994.7 |     6925.5 |     6841.9 |      96.8 |      61.4 |      25.4 |
| [qgis316-bigfile > somap316_fix > av_sw.txt](../results/details/compare-filesize/20201103-084936/qgis316-bigfile/somap316_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |                 16.1 | +101.3%                      |           81   | +389.5%                |          4368.5 | +383.0%                 |            20 |            0 |          0 |      4050.1   |         1841 |         7761 |        6591   |       7709.65 |          7761 |      1.92585 |               930.744  |           0.785764 |              9.4 |     7818.1 |     6773.1 |     6251.7 |      77.4 |      66.5 |      27.8 |
| [qgis316-bigfile > somap316_fix > lk.txt](../results/details/compare-filesize/20201103-084936/qgis316-bigfile/somap316_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |                 17.4 | +0.0%                        |           92.2 | +23.5%                 |          3548.5 | +739.9%                 |            30 |            0 |          0 |      3073.57  |         1774 |         4172 |        3981.7 |       4112.05 |          4172 |      2.60983 |                70.7347 |           1.06721  |              0.8 |     6189.2 |     6181.1 |     6173.7 |      76.4 |      63.3 |      14.6 |
| [qgis218-bigfile > somap218_fix > lk.txt](../results/details/compare-filesize/20201103-084936/qgis218-bigfile/somap218_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |                 18.2 | +4.6%                        |           74.6 | +0.0%                  |           422.5 | +0.0%                   |            30 |            0 |          0 |      2488.27  |           57 |        12059 |       11550.9 |      11928.1  |         12059 |      2.46548 |                41.2951 |           1.00818  |              0.5 |     6207.3 |     5688.1 |     4383   |      99.8 |      64.1 |      12.4 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201103-084936/qgis218-smallfile/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 10.2 | +0.0%                        |           34.7 | +5.5%                  |          1341   | +13.8%                  |            22 |            0 |          0 |      1575.68  |          248 |         3646 |        3499   |       3628.9  |          3646 |      5.06446 |               801.027  |           2.15815  |              3.4 |     3058.9 |     2869.6 |     2608.7 |      98   |      72.4 |      26.2 |
| [qgis316-smallfile > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201103-084936/qgis316-smallfile/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 10.4 | +2.0%                        |           32.9 | +0.0%                  |          1178   | +0.0%                   |            22 |            0 |          0 |      1493.27  |          450 |         3145 |        3025.8 |       3128.2  |          3145 |      4.93716 |               643.741  |           2.1039   |              2.8 |     2826.6 |     2806.4 |     2787.3 |      98   |      73.3 |      33.6 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201103-084936/qgis218-smallfile/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 10.1 | +0.0%                        |           28.7 | +0.0%                  |          1314.5 | +0.0%                   |            20 |            0 |          0 |      1436.1   |          246 |         2816 |        2732.7 |       2812.9  |          2816 |      4.96648 |              1780.64   |           2.07971  |              7   |     3282.1 |     3168   |     2979.7 |      98.1 |      68.1 |      26.3 |
| [qgis316-smallfile > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201103-084936/qgis316-smallfile/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 10.2 | +1.0%                        |           31   | +8.1%                  |          1431.5 | +8.9%                   |            20 |            0 |          0 |      1552.4   |          265 |         3443 |        3024.3 |       3423.65 |          3443 |      4.62749 |              1439.53   |           1.93776  |              6.1 |     2899.7 |     2870   |     2829.1 |      97.6 |      71.3 |      25.2 |
| [qgis316-smallfile > somap316_lk > lk.txt](../results/details/compare-filesize/20201103-084936/qgis316-smallfile/somap316_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.2 | +0.0%                        |            7   | +0.0%                  |           135   | +0.0%                   |            30 |            0 |          0 |       232.367 |           62 |          864 |         777.9 |        846.4  |           864 |     27.5989  |               748.018  |          11.2588   |              0.8 |     2678   |     2678   |     2678   |      17.1 |      17.1 |      17.1 |
| [qgis218-smallfile > somap218_lk > lk.txt](../results/details/compare-filesize/20201103-084936/qgis218-smallfile/somap218_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.9 | +9.7%                        |           11.4 | +63.4%                 |           162   | +20.0%                  |            30 |            0 |          0 |       379.733 |          132 |         1168 |        1151.8 |       1163.6  |          1168 |     15.8814  |               431.027  |           6.47871  |              0.8 |     2622.5 |     2571   |     2479.2 |      58.2 |      39.6 |      13.4 |

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
description: 'compare the effect of different QGIS project file size in QGIS 2.18'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'

  qgis218-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt

  qgis218-smallfile:
    inherit: qgis218-bigfile
    active: yes
    projects:
      somap218_lk:
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis316-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap316_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis316-smallfile:
    inherit: qgis316-bigfile
    active: yes
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 2.18
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
  qgis218-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-2
  qgis218-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
    inherit: qgis218-bigfile
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2
  qgis316-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap316_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis316-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_VERSION: '3.10'
    inherit: qgis316-bigfile
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```