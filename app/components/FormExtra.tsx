'use client'
import React from 'react';

const FormExtra: React.FC = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input 
                    id="lembre-me"
                    name="lembre-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="lembre-me" className="ml-2 block text-sm text-gray-900">
                    lembre-me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-gray-900">
                    Esqueceu sua Senha?
                </a>
            </div>
        </div>
    );
}

export default FormExtra;
