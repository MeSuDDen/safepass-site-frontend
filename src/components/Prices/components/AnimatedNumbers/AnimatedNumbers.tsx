'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import style from './AnimatedNumbers.module.scss'; // Путь к твоим стилям

const AnimatedNumber = () => {
    const [count, setCount] = useState(0);
    const targetCount = 123456; // Конечное значение

    useEffect(() => {
        let start = 0;
        const duration = 1000; // 1 секунда
        const startTime = performance.now();

        const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // нормализуем значение от 0 до 1

            // Используем easing для более плавного эффекта
            const easedProgress = Math.pow(progress - 1, 3) + 1; // ease-out

            start = Math.floor(targetCount * easedProgress); // интерполируем значение
            setCount(start);

            if (progress < 1) {
                requestAnimationFrame(updateCount); // продолжаем анимацию
            }
        };

        requestAnimationFrame(updateCount);

    }, [targetCount]);

    return (
        <h1 className={style.title}>
            Нам доверяют <span className={style.span}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} // Анимация появления текста
                >
                    {count.toLocaleString()}
                </motion.span>
            </span> пользователя и команды
        </h1>
    );
};

export default AnimatedNumber;