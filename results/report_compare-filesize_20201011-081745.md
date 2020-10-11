# QGIS Benchmark summary compare-filesize (20201011-081745)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 38m 21s_

## Summary
| name                                   | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       3705   |               0   |           785 |            0 |     3114   |    2377.33 |      29.8 |   18.6    |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      20636.2 |             457   |           785 |            0 |     6446.2 |    3636.67 |      40.8 |   14.0667 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      20704.6 |             458.8 |           785 |            0 |     6366.6 |    3610.27 |      41.2 |   14.0667 |          0 |
| qgis310-bigfile-hugecache              | Global  |      20733.7 |             459.6 |           785 |            0 |     6451.1 |    3593.23 |      35.2 |   14.1    |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      20746.5 |             460   |           785 |            0 |     6441.9 |    3586.13 |      34.5 |   14.0667 |          0 |
| qgis310-bigfile-bigcache               | Global  |      20757.4 |             460.3 |           785 |            0 |     6374.6 |    3575.87 |      39.9 |   14.0333 |          0 |
| qgis310-bigfile                        | Global  |      20809.8 |             461.7 |           785 |            0 |     6290.6 |    3606.3  |      41.3 |   14.0333 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      20636.2 |               0   |           785 |            0 |     6446.2 |    3636.67 |      40.8 |   14.0667 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      20704.6 |               0.3 |           785 |            0 |     6366.6 |    3610.27 |      41.2 |   14.0667 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      20733.7 |               0.5 |           785 |            0 |     6451.1 |    3593.23 |      35.2 |   14.1    |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      20746.5 |               0.5 |           785 |            0 |     6441.9 |    3586.13 |      34.5 |   14.0667 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      20757.4 |               0.6 |           785 |            0 |     6374.6 |    3575.87 |      39.9 |   14.0333 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix                |      20809.8 |               0.8 |           785 |            0 |     6290.6 |    3606.3  |      41.3 |   14.0333 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       3590.6 |               0   |           735 |            0 |     3114   |    2623.4  |      29.8 |   19.1    |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |         95.7 |               0   |            20 |            0 |     2507.4 |    2303.4  |      26.4 |   18.2    |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |         18.7 |               0   |            30 |            0 |     2228.4 |    2205.2  |      29   |   18.5    |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |      19813.9 |               0   |           735 |            0 |          0 |     26957.7   |         27805   |         3158 |        46222 |       31204.8 |      32921.8  |      44271.1  |     0.369366 |                68.4156 |           0.157219 |     6446.2 |     4173.8 |     2741.2 |      37.6 |      13.9 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |      19878.5 |               0.3 |           735 |            0 |          0 |     27045.6   |         28000   |         3173 |        45809 |       30986.8 |      32915    |      43645.8  |     0.368181 |                68.1958 |           0.156714 |     6366.6 |     4154.2 |     2692.9 |      41.2 |      14   |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |      19903.7 |               0.5 |           735 |            0 |          0 |     27079.9   |         28016   |         3202 |        46007 |       31372.2 |      32870.8  |      44208.6  |     0.367665 |                68.0999 |           0.156494 |     6451.1 |     4157.8 |     2710.6 |      34   |      14   |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |      19930.2 |               0.6 |           735 |            0 |          0 |     27115.9   |         28079   |         3300 |        46322 |       31001.4 |      33301.2  |      44576.8  |     0.367191 |                68.0124 |           0.156293 |     6441.9 |     4105.8 |     2756.7 |      31.9 |      13.9 |      12.3 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |      19943.8 |               0.7 |           735 |            0 |          0 |     27134.4   |         28116   |         3378 |        46676 |       31150.4 |      33179.8  |      44486.6  |     0.36691  |                67.9605 |           0.156173 |     6374.6 |     4135.1 |     2714.1 |      31.4 |      14   |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |      19988.2 |               0.9 |           735 |            0 |          0 |     27194.8   |         28068   |         3428 |        46364 |       31272   |      32985.8  |      44186.7  |     0.366124 |                67.8149 |           0.155839 |     6290.6 |     4144.7 |     2768.8 |      35.9 |      13.9 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |        384.3 |               0   |            20 |            0 |          0 |     19215.4   |         20415.5 |         2516 |        27572 |       27447.7 |      27566    |      27572    |     0.397772 |               193.716  |           0.162294 |     5410.5 |     3879.6 |     3696.9 |      39.9 |      14.5 |      12.6 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |        386.6 |               0.6 |            20 |            0 |          0 |     19328.2   |         20575.5 |         2588 |        27295 |       27225.5 |      27292.2  |      27295    |     0.396503 |               193.097  |           0.161776 |     5695.8 |     3909.8 |     3691.2 |      34.5 |      14.6 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |        388.7 |               1.1 |            20 |            0 |          0 |     19433.1   |         20654   |         4620 |        27649 |       27332.6 |      27633.3  |      27649    |     0.395499 |               192.608  |           0.161367 |     5510.4 |     3943.2 |     3775.1 |      31.6 |      14.4 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |        390.2 |               1.5 |            20 |            0 |          0 |     19511     |         20660   |         4786 |        27534 |       27467.9 |      27530.9  |      27534    |     0.392257 |               191.03   |           0.160044 |     5526.1 |     3901.3 |     3724.8 |      40.4 |      14.5 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |        392.6 |               2.2 |            20 |            0 |          0 |     19629.2   |         21875.5 |         2576 |        27631 |       27469   |      27623    |      27631    |     0.391704 |               190.76   |           0.159818 |     5423.8 |     3996.3 |     3807.6 |      32.8 |      14.6 |      12.6 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |        398   |               3.6 |            20 |            0 |          0 |     19897.9   |         22420.5 |         2127 |        27744 |       27608.7 |      27737.5  |      27744    |     0.386235 |               188.097  |           0.157587 |     5617.7 |     3912.9 |     3736.6 |      32.4 |      14.3 |      12.6 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |        429.3 |               0   |            30 |            0 |          0 |     14309.6   |         16694.5 |         1955 |        17227 |       17189.5 |      17211    |      17227    |     0.589855 |                15.9885 |           0.241203 |     2731.4 |     2712.9 |     2701.5 |      31.2 |      13.6 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |        429.7 |               0.1 |            30 |            0 |          0 |     14324.6   |         16638   |         1974 |        17148 |       17123.8 |      17147.5  |      17148    |     0.587947 |                15.9368 |           0.240423 |     2761.5 |     2739.9 |     2728.8 |      40.8 |      13.7 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |        429.8 |               0.1 |            30 |            0 |          0 |     14325.6   |         16730   |         2148 |        17024 |       16951.7 |      16999.2  |      17024    |     0.590505 |                16.0061 |           0.241469 |     2755.1 |     2742.8 |     2731.3 |      32.8 |      13.7 |      12.6 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |        431.4 |               0.5 |            30 |            0 |          0 |     14380.3   |         16865   |         1922 |        17102 |       17025.4 |      17094.8  |      17102    |     0.587107 |                15.914  |           0.240079 |     2793.8 |     2772.9 |     2761.8 |      41.3 |      13.7 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |        432   |               0.6 |            30 |            0 |          0 |     14401     |         16685.5 |         1969 |        17551 |       17528.6 |      17541.1  |      17551    |     0.585023 |                15.8576 |           0.239227 |     2733   |     2709   |     2647.5 |      35.2 |      14   |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |        437.5 |               1.9 |            30 |            0 |          0 |     14581.7   |         17247.5 |         2029 |        17566 |       17499.5 |      17542.9  |      17566    |     0.578414 |                15.6784 |           0.236524 |     2745.7 |     2733.4 |     2711.9 |      28.4 |      13.8 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201011-081745/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |       3590.6 |               0   |           735 |            0 |          0 |      4885.21  |          5100   |         2056 |         7973 |        6074.8 |       7015.2  |       7698.48 |     2.03562  |               297.907  |           0.896267 |     3114   |     2623.4 |     2144.6 |      29.8 |      19.1 |      12.8 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201011-081745/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |         95.7 |               0   |            20 |            0 |          0 |      4784.9   |          4772.5 |         3159 |         6407 |        6290.7 |       6401.2  |       6407    |     1.57332  |               489.532  |           0.658826 |     2507.4 |     2303.4 |     2270.4 |      26.4 |      18.2 |      12.8 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201011-081745/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |         18.7 |               0   |            30 |            0 |          0 |       623.033 |           705.5 |          269 |          865 |         803   |        850.15 |        865    |    11.6822   |               316.657  |           4.76569  |     2228.4 |     2205.2 |     2182.1 |      29   |      18.5 |       8   |

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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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
      QGIS_SERVER_MAX_THREADS: '4'
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