import React from 'react';
import { Card } from './ui/card';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 rounded-full"></div>
          <Card className="bg-slate-800 border-slate-700 p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{data.bio}</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With over 5 years of experience in cybersecurity, I have successfully secured client infrastructures
              using advanced tools like <span className="text-cyan-400 font-semibold">Azure Sentinel</span>,{' '}
              <span className="text-cyan-400 font-semibold">IBM QRadar</span>, and{' '}
              <span className="text-cyan-400 font-semibold">CrowdStrike</span>. My expertise lies in providing
              advanced threat analysis to mitigate cyber risks and ensure robust security postures.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my Master's in Information Technology at Florida Atlantic University, I am seeking
              opportunities as a <span className="text-cyan-400 font-semibold">Cybersecurity Analyst</span> or{' '}
              <span className="text-cyan-400 font-semibold">Technical Consultant</span> where I can apply my expertise
              in incident response, security monitoring, and cloud security to contribute to a proactive security posture
              in enterprise environments.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
