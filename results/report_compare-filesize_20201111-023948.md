# QGIS Benchmark summary compare-filesize (20201111-023948)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 15m 19s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201111-023948_plot.html)

## Summary
| name              | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-smallfile | Global  |             26   | +0.0%                    |              13.9 | +9.4%                     |           65.5 | +0.0%                  |          2081.5 | +8.9%                   |          706 |         7354 |              9.7 |            72 |            0 |     3058.7 |    2922.6  |     2769   |      96.9 |   56      |      16.3 |          0 |
| qgis218-smallfile | Global  |             26.1 | +0.4%                    |              12.7 | +0.0%                     |           70.4 | +7.4%                  |          2798.5 | +46.4%                  |          646 |         7294 |             11.2 |            72 |            0 |     3510.3 |    3063.4  |     2712.7 |      98.1 |   52.8    |      13   |          0 |
| qgis218-bigfile   | Global  |             40.2 | +54.6%                   |             249.9 | +1867.7%                  |          116.9 | +78.3%                 |          1911.5 | +0.0%                   |          529 |        22247 |              1.6 |            72 |            0 |     7386.3 |    6739.27 |     4218.3 |      99.5 |   53.6333 |      10.1 |          0 |
| qgis316-bigfile   | Global  |             49.8 | +91.5%                   |             415.4 | +3170.9%                  |          262.6 | +300.6%                |         12189   | +537.7%                 |         5353 |        17518 |             13   |            72 |            0 |     8594.1 |    6747.23 |     6342.3 |      76.6 |   64.7    |      14.5 |          0 |

## Aggregated
| name                                            | group                    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218_fix                  | somap_fix                |             40.2 | +0.0%                    |             249.9 | +0.0%                     |          116.9 | +0.0%                  |          1911.5 | +0.0%                   |          529 |        22247 |              1.6 |            72 |            0 |     7386.3 |    6739.27 |     4218.3 |      99.5 |   53.6333 |      10.1 |          0 |
| qgis316-bigfile > somap316_fix                  | somap_fix                |             49.8 | +23.9%                   |             415.4 | +66.2%                    |          262.6 | +124.7%                |         12189   | +537.7%                 |         5353 |        17518 |             13   |            72 |            0 |     8594.1 |    6747.23 |     6342.3 |      76.6 |   64.7    |      14.5 |          0 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |              9.5 | +0.0%                    |               0.3 | +50.0%                    |           32.5 | +10.4%                 |          1382.5 | +50.2%                  |          243 |         3342 |              3.4 |            22 |            0 |     3231.1 |    3082.5  |     2921.1 |      96.2 |   71.8    |      28   |          0 |
| qgis316-smallfile > somap316_grundplanav_farbig | somap_grundplanav_farbig |              9.5 | +0.0%                    |               0.2 | +0.0%                     |           29.5 | +0.0%                  |           920.5 | +0.0%                   |          401 |         2870 |              2.8 |            22 |            0 |     3015.5 |    2934.8  |     2822.7 |      92.7 |   63.7    |      27.3 |          0 |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |              9   | +0.0%                    |               2.9 | +1350.0%                  |           26.7 | +0.0%                  |          1265.5 | +22.7%                  |          275 |         2788 |              7   |            20 |            0 |     3510.3 |    3395    |     3209   |      98.1 |   73.6    |      23.1 |          0 |
| qgis316-smallfile > somap316_grundplanav_sw     | somap_grundplanav_sw     |              9.6 | +6.7%                    |               0.2 | +0.0%                     |           29.7 | +11.5%                 |          1031.5 | +0.0%                   |          245 |         3714 |              6.1 |            20 |            0 |     3058.7 |    3025.9  |     2983.5 |      96.9 |   68      |      25.7 |          0 |
| qgis316-smallfile > somap316_lk                 | somap_lk                 |              6.9 | +0.0%                    |              13.5 | +42.1%                    |            6.3 | +0.0%                  |           129.5 | +0.0%                   |           60 |          770 |              0.8 |            30 |            0 |     2845.3 |    2807.1  |     2769   |      56.4 |   36.3    |      16.3 |          0 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |              7.6 | +10.1%                   |               9.5 | +0.0%                     |           11.2 | +75.7%                 |           150.5 | +16.2%                  |          128 |         1164 |              0.8 |            30 |            0 |     2712.7 |    2712.7  |     2712.7 |      13   |   13      |      13   |          0 |

## Detail
| name                                                                                                                                                                                          | group                               |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218_fix > av_f.txt](../results/details/compare-filesize/20201111-023948/qgis218-bigfile/somap218_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |             16.4 | +0.0%                    |             104.4 | +20780.0%                 |           49.4 | +0.0%                  |           713   | +0.0%                   |            22 |            0 |          0 |      2246.23  |          200 |        10489 |       10292.4 |      10474    |         10489 |      2.05877 |                80.0924 |           0.847158 |              0.8 |     7330.2 |     7112.5 |     6602.3 |      99.5 |      52.7 |      13.2 |
| [qgis316-bigfile > somap316_fix > av_f.txt](../results/details/compare-filesize/20201111-023948/qgis316-bigfile/somap316_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |             18.2 | +11.0%                   |               0.5 | +0.0%                     |          100   | +102.3%                |          4679   | +556.2%                 |            22 |            0 |          0 |      4543.27  |         1996 |         6405 |        6315.1 |       6397.5  |          6405 |      1.73611 |               227.146  |           0.714389 |              2.8 |     8594.1 |     6781.2 |     6385.8 |      76.6 |      65.8 |      27   |
| [qgis218-bigfile > somap218_fix > av_sw.txt](../results/details/compare-filesize/20201111-023948/qgis218-bigfile/somap218_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |              7.9 | +0.0%                    |               9.7 | +1840.0%                  |           16.4 | +0.0%                  |           785   | +0.0%                   |            20 |            0 |          0 |       818.6   |          269 |         1410 |        1251   |       1402.25 |          1410 |      8.21355 |               139.518  |           3.35119  |              0.3 |     7386.3 |     7361.7 |     7337.2 |      96.4 |      57.7 |      18.9 |
| [qgis316-bigfile > somap316_fix > av_sw.txt](../results/details/compare-filesize/20201111-023948/qgis316-bigfile/somap316_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |             15.3 | +93.7%                   |               0.5 | +0.0%                     |           78   | +376.4%                |          4187   | +433.4%                 |            20 |            0 |          0 |      3900.1   |         1677 |         7465 |        5905.4 |       7391    |          7465 |      2.01939 |               976.31   |           0.823925 |              9.4 |     8194.8 |     7092.7 |     6443.7 |      75.2 |      66.3 |      28.6 |
| [qgis218-bigfile > somap218_fix > lk.txt](../results/details/compare-filesize/20201111-023948/qgis218-bigfile/somap218_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |             15.9 | +0.0%                    |             135.8 | +0.0%                     |           51.1 | +0.0%                  |           413.5 | +0.0%                   |            30 |            0 |          0 |      1703.17  |           60 |        10348 |        4348.9 |      10253.4  |         10348 |      2.85932 |                47.8916 |           1.16923  |              0.5 |     6287.2 |     5743.6 |     4218.3 |      99.5 |      50.5 |      10.1 |
| [qgis316-bigfile > somap316_fix > lk.txt](../results/details/compare-filesize/20201111-023948/qgis316-bigfile/somap316_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |             16.3 | +2.5%                    |             414.4 | +205.2%                   |           84.7 | +65.7%                 |          3323   | +703.6%                 |            30 |            0 |          0 |      2821.8   |         1680 |         3648 |        3462   |       3554.5  |          3648 |      2.78733 |                75.5455 |           1.13979  |              0.8 |     6383.2 |     6367.8 |     6342.3 |      76.1 |      62   |      14.5 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201111-023948/qgis218-smallfile/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |              9.5 | +0.0%                    |               0.3 | +50.0%                    |           32.5 | +10.4%                 |          1382.5 | +50.2%                  |            22 |            0 |          0 |      1479.55  |          243 |         3342 |        3222   |       3328.05 |          3342 |      5.25185 |               830.329  |           2.238    |              3.4 |     3231.1 |     3082.5 |     2921.1 |      96.2 |      71.8 |      28   |
| [qgis316-smallfile > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201111-023948/qgis316-smallfile/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |              9.5 | +0.0%                    |               0.2 | +0.0%                     |           29.5 | +0.0%                  |           920.5 | +0.0%                   |            22 |            0 |          0 |      1339.64  |          401 |         2870 |        2854.2 |       2869.7  |          2870 |      5.57244 |               726.573  |           2.37462  |              2.8 |     3015.5 |     2934.8 |     2822.7 |      92.7 |      63.7 |      27.3 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201111-023948/qgis218-smallfile/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |              9   | +0.0%                    |               2.9 | +1350.0%                  |           26.7 | +0.0%                  |          1265.5 | +22.7%                  |            20 |            0 |          0 |      1333.3   |          275 |         2788 |        2306.4 |       2765.05 |          2788 |      5.87889 |              2105.85   |           2.46179  |              7   |     3510.3 |     3395   |     3209   |      98.1 |      73.6 |      23.1 |
| [qgis316-smallfile > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201111-023948/qgis316-smallfile/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |              9.6 | +6.7%                    |               0.2 | +0.0%                     |           29.7 | +11.5%                 |          1031.5 | +0.0%                   |            20 |            0 |          0 |      1486.5   |          245 |         3714 |        3573.4 |       3712.9  |          3714 |      4.83793 |              1503.58   |           2.02588  |              6.1 |     3058.7 |     3025.9 |     2983.5 |      96.9 |      68   |      25.7 |
| [qgis316-smallfile > somap316_lk > lk.txt](../results/details/compare-filesize/20201111-023948/qgis316-smallfile/somap316_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |              6.9 | +0.0%                    |              13.5 | +42.1%                    |            6.3 | +0.0%                  |           129.5 | +0.0%                   |            30 |            0 |          0 |       211.5   |           60 |          770 |         751   |        762.3  |           770 |     27.6498  |               749.397  |          11.2795   |              0.8 |     2845.3 |     2807.1 |     2769   |      56.4 |      36.3 |      16.3 |
| [qgis218-smallfile > somap218_lk > lk.txt](../results/details/compare-filesize/20201111-023948/qgis218-smallfile/somap218_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |              7.6 | +10.1%                   |               9.5 | +0.0%                     |           11.2 | +75.7%                 |           150.5 | +16.2%                  |            30 |            0 |          0 |       371.667 |          128 |         1164 |        1155.4 |       1160.15 |          1164 |     16.2426  |               440.829  |           6.62603  |              0.8 |     2712.7 |     2712.7 |     2712.7 |      13   |      13   |      13   |

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
      QGIS_VERSION: '3.10-ubuntu'
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
      QGIS_VERSION: 3.10-ubuntu
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
      QGIS_VERSION: 3.10-ubuntu
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