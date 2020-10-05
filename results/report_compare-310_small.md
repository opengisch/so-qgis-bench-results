# QGIS Benchmark summary 20201004-202844

_run completed in 263.89s_

## Summary
| name                 |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock        |       160.8  |        0    |            72 |            0 |          0 |
| qgis310-cachesize200 |       268.82 |       67.18 |            72 |            0 |          0 |
| qgis310-maxcache20   |       269.1  |       67.35 |            72 |            0 |          0 |
| qgis310-nossl        |       269.35 |       67.51 |            72 |            0 |          0 |
| qgis310-maxcache200  |       271.07 |       68.58 |            72 |            0 |          0 |
| qgis310-cachesize20  |       273.12 |       69.85 |            72 |            0 |          0 |

## Aggregated
| name                                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock > somap310_lk                        |        16.65 |        0    |            30 |            0 |          0 |
| qgis310-cachesize200 > somap310_lk                 |        45.86 |      175.44 |            30 |            0 |          0 |
| qgis310-maxcache200 > somap310_lk                  |        47.1  |      182.88 |            30 |            0 |          0 |
| qgis310-maxcache20 > somap310_lk                   |        47.45 |      184.98 |            30 |            0 |          0 |
| qgis310-nossl > somap310_lk                        |        50.9  |      205.71 |            30 |            0 |          0 |
| qgis310-cachesize20 > somap310_lk                  |        51.1  |      206.91 |            30 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_sw            |        54.94 |      229.97 |            20 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_farbig        |        89.21 |      435.8  |            22 |            0 |          0 |
| qgis310-cachesize20 > somap310_grundplanav_sw      |        93.67 |      462.58 |            20 |            0 |          0 |
| qgis310-nossl > somap310_grundplanav_sw            |        95.6  |      474.17 |            20 |            0 |          0 |
| qgis310-maxcache20 > somap310_grundplanav_sw       |        96.16 |      477.54 |            20 |            0 |          0 |
| qgis310-maxcache200 > somap310_grundplanav_sw      |        97.07 |      483    |            20 |            0 |          0 |
| qgis310-cachesize200 > somap310_grundplanav_sw     |        97.34 |      484.62 |            20 |            0 |          0 |
| qgis310-nossl > somap310_grundplanav_farbig        |       122.85 |      637.84 |            22 |            0 |          0 |
| qgis310-maxcache20 > somap310_grundplanav_farbig   |       125.49 |      653.69 |            22 |            0 |          0 |
| qgis310-cachesize200 > somap310_grundplanav_farbig |       125.62 |      654.47 |            22 |            0 |          0 |
| qgis310-maxcache200 > somap310_grundplanav_farbig  |       126.9  |      662.16 |            22 |            0 |          0 |
| qgis310-cachesize20 > somap310_grundplanav_farbig  |       128.35 |      670.87 |            22 |            0 |          0 |

## Detail
| name                                                          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                                 |
|---------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| qgis310-stock > somap310_lk > lk.txt                          |        16.65 |        0    |            30 |            0 |          0 |       554.967 |           580.5 |          240 |          866 |         806   |        843.45 |           866 |     19.0476  |                516.302 |           7.77034  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-stock/somap310_lk/lk.txt/dashboard/index.html)                          |
| qgis310-cachesize200 > somap310_lk > lk.txt                   |        45.86 |      175.44 |            30 |            0 |          0 |      1528.57  |          1647   |          941 |         1764 |        1756.4 |       1762.35 |          1764 |      8.726   |                236.526 |           3.55971  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize200/somap310_lk/lk.txt/dashboard/index.html)                   |
| qgis310-maxcache200 > somap310_lk > lk.txt                    |        47.1  |      182.88 |            30 |            0 |          0 |      1570     |          1710.5 |          928 |         1833 |        1824.8 |       1831.35 |          1833 |      8.58861 |                232.802 |           3.50366  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache200/somap310_lk/lk.txt/dashboard/index.html)                    |
| qgis310-maxcache20 > somap310_lk > lk.txt                     |        47.45 |      184.98 |            30 |            0 |          0 |      1581.8   |          1725.5 |          919 |         1856 |        1842.5 |       1853.8  |          1856 |      8.63558 |                234.075 |           3.52282  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache20/somap310_lk/lk.txt/dashboard/index.html)                     |
| qgis310-nossl > somap310_lk > lk.txt                          |        50.9  |      205.71 |            30 |            0 |          0 |      1696.67  |          1837   |         1006 |         2019 |        2007.2 |       2017.9  |          2019 |      7.9766  |                216.213 |           3.254    | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-nossl/somap310_lk/lk.txt/dashboard/index.html)                          |
| qgis310-cachesize20 > somap310_lk > lk.txt                    |        51.1  |      206.91 |            30 |            0 |          0 |      1703.43  |          1797   |          930 |         2044 |        2027.7 |       2039.6  |          2044 |      8.19001 |                221.997 |           3.34105  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize20/somap310_lk/lk.txt/dashboard/index.html)                    |
| qgis310-stock > somap310_grundplanav_sw > av_sw.txt           |        54.94 |      229.97 |            20 |            0 |          0 |      2747.1   |          2344.5 |          430 |         5425 |        4868   |       5398.95 |          5425 |      3.3162  |               1031.83  |           1.38866  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-stock/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)           |
| qgis310-stock > somap310_grundplanav_farbig > av_f.txt        |        89.21 |      435.8  |            22 |            0 |          0 |      4054.91  |          4186   |          785 |         7011 |        6794.3 |       7009.5  |          7011 |      2.77288 |                361.559 |           1.18162  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-stock/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)        |
| qgis310-cachesize20 > somap310_grundplanav_sw > av_sw.txt     |        93.67 |      462.58 |            20 |            0 |          0 |      4683.4   |          4232.5 |         2390 |         8470 |        7825.9 |       8441.95 |          8470 |      2.16873 |                674.793 |           0.908154 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize20/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)     |
| qgis310-nossl > somap310_grundplanav_sw > av_sw.txt           |        95.6  |      474.17 |            20 |            0 |          0 |      4780.1   |          4341.5 |         2480 |         8321 |        7631.5 |       8290.6  |          8321 |      2.20629 |                686.481 |           0.923883 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-nossl/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)           |
| qgis310-maxcache20 > somap310_grundplanav_sw > av_sw.txt      |        96.16 |      477.54 |            20 |            0 |          0 |      4808.1   |          4390.5 |         2435 |         9235 |        8566   |       9205.9  |          9235 |      2.00582 |                624.105 |           0.839936 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache20/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)      |
| qgis310-maxcache200 > somap310_grundplanav_sw > av_sw.txt     |        97.07 |      483    |            20 |            0 |          0 |      4853.55  |          4514.5 |         2572 |         8542 |        7857.2 |       8512    |          8542 |      2.15285 |                669.852 |           0.901507 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache200/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)     |
| qgis310-cachesize200 > somap310_grundplanav_sw > av_sw.txt    |        97.34 |      484.62 |            20 |            0 |          0 |      4867.05  |          4350.5 |         2462 |         8798 |        8032.6 |       8764    |          8798 |      2.10018 |                653.463 |           0.87945  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize200/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis310-nossl > somap310_grundplanav_farbig > av_f.txt        |       122.85 |      637.84 |            22 |            0 |          0 |      5584.18  |          5951.5 |         2589 |         7863 |        7728.2 |       7855.65 |          7863 |      2.33546 |                304.523 |           0.995223 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-nossl/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)        |
| qgis310-maxcache20 > somap310_grundplanav_farbig > av_f.txt   |       125.49 |      653.69 |            22 |            0 |          0 |      5704.23  |          6115   |         2690 |         8056 |        7863.7 |       8045.2  |          8056 |      2.28453 |                297.883 |           0.97352  | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache20/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   |
| qgis310-cachesize200 > somap310_grundplanav_farbig > av_f.txt |       125.62 |      654.47 |            22 |            0 |          0 |      5709.82  |          6110   |         2628 |         7966 |        7841.8 |       7956.1  |          7966 |      2.29837 |                299.688 |           0.979419 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize200/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |
| qgis310-maxcache200 > somap310_grundplanav_farbig > av_f.txt  |       126.9  |      662.16 |            22 |            0 |          0 |      5768.14  |          6187   |         2881 |         7963 |        7879   |       7954.9  |          7963 |      2.29573 |                299.344 |           0.978295 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-maxcache200/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)  |
| qgis310-cachesize20 > somap310_grundplanav_farbig > av_f.txt  |       128.35 |      670.87 |            22 |            0 |          0 |      5834.32  |          6218.5 |         2876 |         8119 |        7968.8 |       8109.7  |          8119 |      2.27602 |                296.773 |           0.969894 | [JMeter dashboard](../results/compare-310/20201004-202844/qgis310-cachesize20/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)  |

### used global configuration

```
cpu-cores: 20
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

test-cases:

  qgis310-stock:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt #lk_big.txt
      somap310_grundplanav_farbig:
        - av_f.txt #av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt #av_sw_big.txt

  qgis310-maxcache20:
    inherit: qgis310-stock
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '20'

  qgis310-maxcache200:
    inherit: qgis310-stock
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '200'

  qgis310-cachesize20:
    inherit: qgis310-stock
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '20'

  qgis310-cachesize200:
    inherit: qgis310-stock
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-nossl:
    inherit: qgis310-stock
    compose-variables:
      PG_SERVICE: 'pg_service_nossl.conf'

```
### parsed test configurations

```
test-cases:
  qgis310-cachesize20:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '20'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-cachesize200:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-maxcache20:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '20'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-maxcache200:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '200'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-nossl:
    active: true
    compose-variables:
      PG_SERVICE: pg_service_nossl.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```
