# QGIS Benchmark summary compare-major (20201103-061817)


compare different version of QGIS servers using the same settings

_run completed in 00h 43m 22s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201103-061817_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                424.4 | +0.0%                        |         4001.5 | +0.0%                  |           819   | +0.0%                   |           14 |        12267 |           1720.1 |         11187 |            0 |    10241.7 |    6254    |     3236.1 |      99.7 |   94.8    |      21.6 |          0 |
| qgis310 | Global  |                575.7 | +35.7%                       |         5525.5 | +38.1%                 |          1314.5 | +60.5%                  |          407 |        11933 |           1719.9 |         11187 |            0 |    10199.3 |    6035.8  |     3159.8 |      99.8 |   96.8    |      16.4 |          0 |
| qgis314 | Global  |                583.5 | +37.5%                       |         5599.4 | +39.9%                 |          1344.5 | +64.2%                  |          454 |        12582 |           1719.8 |         11187 |            0 |    10392.1 |    6181.23 |     3257.6 |      99.7 |   97.3    |      21.8 |          0 |
| qgis218 | Global  |                728.1 | +71.6%                       |         7016.5 | +75.3%                 |          1394.5 | +70.3%                  |          438 |        28812 |           1965.3 |         11187 |            0 |     9281.9 |    5840.57 |     3207.3 |      99.8 |   97.4667 |       1.4 |          0 |

## Aggregated
| name                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 43.7 | +0.0%                        |          371.6 | +0.0%                  |           469   | +0.0%                   |            6 |         3437 |            105   |           735 |            0 |     6436.2 |     5710.8 |     4326.5 |      98.4 |      93.6 |      27.8 |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 60.5 | +38.4%                       |          541.5 | +45.7%                 |           705   | +50.3%                  |          190 |         3525 |            105   |           735 |            0 |     6227.5 |     5408.4 |     3548.1 |      99.1 |      95.9 |      26.8 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |                 61.4 | +40.5%                       |          546.7 | +47.1%                 |           719   | +53.3%                  |          215 |         3735 |            105   |           735 |            0 |     6290   |     5577.4 |     3799.3 |      98.9 |      96.4 |      28.8 |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 69.5 | +59.0%                       |          623.8 | +67.9%                 |           668   | +42.4%                  |          225 |         8346 |            125.6 |           735 |            0 |     5098.5 |     4708   |     4281.6 |      99.1 |      96.5 |      27   |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |                264.5 | +0.0%                        |         2558.4 | +0.0%                  |           300   | +0.0%                   |            5 |         5654 |           1371.9 |          5190 |            0 |    10241.7 |     8325.4 |     4932.7 |      99.1 |      95.9 |      25.4 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |                376.5 | +42.3%                       |         3678.5 | +43.8%                 |           507.5 | +69.2%                  |          181 |         6000 |           1371.7 |          5190 |            0 |    10199.3 |     8086.4 |     4746.3 |      99.8 |      97.7 |      16.4 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |                377.4 | +42.7%                       |         3686.4 | +44.1%                 |           511.5 | +70.5%                  |          195 |         6645 |           1371.7 |          5190 |            0 |    10392.1 |     8313.2 |     5007.5 |      99.6 |      98.2 |      30.7 |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |                510.5 | +93.0%                       |         4989.3 | +95.0%                 |           578.5 | +92.8%                  |          208 |        16520 |           1578.1 |          5190 |            0 |     9281.9 |     8053   |     4458.7 |      99.8 |      98.2 |      13.3 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |                116.2 | +0.0%                        |         1071.5 | +0.0%                  |            50   | +0.0%                   |            3 |         3176 |            243.2 |          5262 |            0 |     6420.6 |     4725.8 |     3236.1 |      99.7 |      94.9 |      21.6 |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |                138.7 | +19.4%                       |         1305.5 | +21.8%                 |           102   | +104.0%                 |           36 |         2408 |            243.2 |          5262 |            0 |     6712.9 |     4612.6 |     3159.8 |      99.6 |      96.8 |      20.4 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |                144.7 | +24.5%                       |         1366.2 | +27.5%                 |           114   | +128.0%                 |           44 |         2202 |            243.1 |          5262 |            0 |     6900.3 |     4653.1 |     3257.6 |      99.7 |      97.3 |      21.8 |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |                148.1 | +27.5%                       |         1403.4 | +31.0%                 |           148   | +196.0%                 |            5 |         3946 |            261.6 |          5262 |            0 |     6280.1 |     4760.7 |     3207.3 |      99.6 |      97.7 |       1.4 |          0 |

## Detail
| name                                                                                                                                                                           | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-061817/qgis316/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 43.7 | +0.0%                        |          371.6 | +0.0%                  |           469   | +0.0%                   |           735 |            0 |          0 |       505.585 |            6 |         3437 |         895.2 |       1051.8  |       1662.32 |      19.3213 |                2827.32 |            8.50701 |            105   |     6436.2 |     5710.8 |     4326.5 |      98.4 |      93.6 |      27.8 |
| [qgis310 > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-061817/qgis310/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 60.5 | +38.4%                       |          541.5 | +45.7%                 |           705   | +50.3%                  |           735 |            0 |          0 |       736.741 |          190 |         3525 |        1163   |       1351.2  |       1817.28 |      13.37   |                1956.66 |            5.8867  |            105   |     6227.5 |     5408.4 |     3548.1 |      99.1 |      95.9 |      26.8 |
| [qgis314 > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-061817/qgis314/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 61.4 | +40.5%                       |          546.7 | +47.1%                 |           719   | +53.3%                  |           735 |            0 |          0 |       743.863 |          215 |         3735 |        1152.2 |       1300    |       1933.24 |      13.2347 |                1936.77 |            5.82713 |            105   |     6290   |     5577.4 |     3799.3 |      98.9 |      96.4 |      28.8 |
| [qgis218 > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201103-061817/qgis218/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 69.5 | +59.0%                       |          623.8 | +67.9%                 |           668   | +42.4%                  |           735 |            0 |          0 |       848.645 |          225 |         8346 |        1444   |       1717.2  |       2991.8  |      11.5108 |                2014.35 |            5.06813 |            125.6 |     5098.5 |     4708   |     4281.6 |      99.1 |      96.5 |      27   |
| [qgis316 > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-061817/qgis316/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                264.5 | +0.0%                        |         2558.4 | +0.0%                  |           300   | +0.0%                   |          5190 |            0 |          0 |       492.95  |            5 |         5654 |        1218   |       1443.9  |       2321.9  |      20.0882 |                5437.47 |            8.749   |           1371.9 |    10241.7 |     8325.4 |     4932.7 |      99.1 |      95.9 |      25.4 |
| [qgis310 > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-061817/qgis310/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                376.5 | +42.3%                       |         3678.5 | +43.8%                 |           507.5 | +69.2%                  |          5190 |            0 |          0 |       708.759 |          181 |         6000 |        1447.8 |       1681.45 |       2421.25 |      14.0119 |                3792.27 |            6.10257 |           1371.7 |    10199.3 |     8086.4 |     4746.3 |      99.8 |      97.7 |      16.4 |
| [qgis314 > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-061817/qgis314/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                377.4 | +42.7%                       |         3686.4 | +44.1%                 |           511.5 | +70.5%                  |          5190 |            0 |          0 |       710.293 |          195 |         6645 |        1439.8 |       1663.45 |       2454.72 |      13.9782 |                3783    |            6.08791 |           1371.7 |    10392.1 |     8313.2 |     5007.5 |      99.6 |      98.2 |      30.7 |
| [qgis218 > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201103-061817/qgis218/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                510.5 | +93.0%                       |         4989.3 | +95.0%                 |           578.5 | +92.8%                  |          5190 |            0 |          0 |       961.324 |          208 |        16520 |        2155   |       2623.9  |       5251.52 |      10.2955 |                3205.55 |            4.48396 |           1578.1 |     9281.9 |     8053   |     4458.7 |      99.8 |      98.2 |      13.3 |
| [qgis316 > somap316_lk > lk_big.txt](../results/details/compare-major/20201103-061817/qgis316/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                116.2 | +0.0%                        |         1071.5 | +0.0%                  |            50   | +0.0%                   |          5262 |            0 |          0 |       203.624 |            3 |         3176 |         598.4 |        798.85 |       1254.11 |      48.0254 |                2272.57 |           24.3274  |            243.2 |     6420.6 |     4725.8 |     3236.1 |      99.7 |      94.9 |      21.6 |
| [qgis310 > somap310_lk > lk_big.txt](../results/details/compare-major/20201103-061817/qgis310/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                138.7 | +19.4%                       |         1305.5 | +21.8%                 |           102   | +104.0%                 |          5262 |            0 |          0 |       248.101 |           36 |         2408 |         663.4 |        865.85 |       1302.48 |      39.8    |                1884.01 |           20.1608  |            243.2 |     6712.9 |     4612.6 |     3159.8 |      99.6 |      96.8 |      20.4 |
| [qgis314 > somap314_lk > lk_big.txt](../results/details/compare-major/20201103-061817/qgis314/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                144.7 | +24.5%                       |         1366.2 | +27.5%                 |           114   | +128.0%                 |          5262 |            0 |          0 |       259.641 |           44 |         2202 |         658.7 |        858.85 |       1328.37 |      38.0574 |                1800.57 |           19.2781  |            243.1 |     6900.3 |     4653.1 |     3257.6 |      99.7 |      97.3 |      21.8 |
| [qgis218 > somap218_lk > lk_big.txt](../results/details/compare-major/20201103-061817/qgis218/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                148.1 | +27.5%                       |         1403.4 | +31.0%                 |           148   | +196.0%                 |          5262 |            0 |          0 |       266.711 |            5 |         3946 |         706   |        997    |       1752.59 |      37.1385 |                1890.53 |           18.8126  |            261.6 |     6280.1 |     4760.7 |     3207.3 |      99.6 |      97.7 |       1.4 |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '10'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '10'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '10'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '10'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '10'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '10'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```