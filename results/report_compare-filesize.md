# QGIS Benchmark summary compare-filesize (20201005-155250)

_run completed in 173.77s_

## Summary
| name              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile |        65.58 |        0    |            72 |            0 |          0 |
| qgis310-bigfile   |       485.92 |      640.96 |            72 |            0 |          0 |

## Aggregated
| name                                            |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|-------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-smallfile > somap310_lk                 |         5.58 |        0    |            30 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw     |        29.13 |      422.04 |            20 |            0 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig |        30.87 |      453.23 |            22 |            0 |          0 |
| qgis310-bigfile > somap310_fix                  |       485.92 |     8608.24 |            72 |            0 |          0 |

## Detail
| name                                                       |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec | dashboard                                                                                                                                   |
|------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| qgis310-smallfile > somap310_lk > lk.txt                   |         5.58 |        0    |            30 |            0 |          0 |        186.1  |           203   |           56 |          252 |         234.5 |        250.35 |           252 |    16.6945   |               452.519  |           6.8104   | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                   |
| qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt    |        29.13 |      422.04 |            20 |            0 |          0 |       1456.7  |          1344   |          412 |         2369 |        2333.6 |       2367.4  |          2369 |     2.45881  |               765.052  |           1.02963  | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)    |
| qgis310-smallfile > somap310_grundplanav_farbig > av_f.txt |        30.87 |      453.23 |            22 |            0 |          0 |       1403.23 |          1422.5 |          446 |         2275 |        2056.2 |       2246.95 |          2275 |     2.52641  |               329.422  |           1.0766   | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-smallfile/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) |
| qgis310-bigfile > somap310_fix > lk.txt                    |       136.88 |     2353.05 |            30 |            0 |          0 |       4562.53 |          4885   |         1375 |         5256 |        5198.2 |       5240.05 |          5256 |     0.826014 |                22.3898 |           0.337773 | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                    |
| qgis310-bigfile > somap310_fix > av_f.txt                  |       167.6  |     2903.58 |            22 |            0 |          0 |       7617.95 |          7961.5 |         2706 |         9261 |        8743.4 |       9186.15 |          9261 |     0.489259 |                64.1395 |           0.201324 | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                  |
| qgis310-bigfile > somap310_fix > av_sw.txt                 |       181.44 |     3151.61 |            20 |            0 |          0 |       9072.15 |          6198   |         2115 |        21584 |       18975.6 |      21460.8  |         21584 |     0.415395 |               202.297  |           0.169484 | [JMeter dashboard](../results/compare-filesize/20201005-155250/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./logs/prepared/
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/./results/

```
### test configurations

```
# this file includes the test cases

test-cases:

  qgis310-bigfile:
    active: yes
    parallel_requests: 4
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
        - av_f.txt
        - av_sw.txt

  qgis310-smallfile:
    inherit: qgis310-bigfile
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
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
    parallel_requests: 4
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
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
    parallel_requests: 4
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
