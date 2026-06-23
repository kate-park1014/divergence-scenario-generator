export const scenario_hell_memo_28_02 = {
	"scenario_id": "hell_memo_28_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 서류 심사 구역. 끝없이 쌓인 문서들이 하늘을 가렸다.",
						"english": "Hell's document review area. Endless stacks of documents obscured the sky.",
						"japanese": "地獄の書類審査区域。果てしなく積まれた書類が空を覆った。",
						"chinese": "地狱的文书审查区。无尽堆积的文档遮蔽了天空。",
						"french": "La zone d'examen des documents de l'enfer. Des piles de documents sans fin cachaient le ciel.",
						"spanish": "Zona de revisión de documentos del infierno. Un sinfín de documentos amontonados cubrían el cielo.",
						"vietnamese": "Khu vực kiểm duyệt giấy tờ của địa ngục. Vô số tài liệu chất đống che khuất cả bầu trời.",
						"thai": "เขตตรวจสอบเอกสารของนรก เอกสารที่กองพะเนินไม่มีที่สิ้นสุดบดบังท้องฟ้า",
						"hindi": "नर्क का दस्तावेज़ समीक्षा क्षेत्र। कागज़ात के अंतहीन ढेर ने आकाश को ढक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유황 연기 속, 영혼들의 희미한 비명이 메아리쳤다.",
						"english": "In the sulfurous smoke, the faint screams of souls echoed.",
						"japanese": "硫黄の煙の中、魂たちの微かな悲鳴が響き渡った。",
						"chinese": "在硫磺烟雾中，灵魂们微弱的尖叫声回荡着。",
						"french": "Dans la fumée sulfureuse, les faibles cris des âmes résonnaient.",
						"spanish": "Entre el humo sulfuroso, los débiles gritos de las almas resonaban.",
						"vietnamese": "Trong làn khói lưu huỳnh, những tiếng thét yếu ớt của các linh hồn vang vọng.",
						"thai": "ในควันกำมะถัน เสียงกรีดร้องแผ่วเบาของวิญญาณดังก้อง",
						"hindi": "गंधक के धुएँ में, आत्माओं की धीमी चीखें गूँज उठीं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 서류 지옥이구나.",
						"english": "This is... paperwork hell.",
						"japanese": "ここが…書類地獄か。",
						"chinese": "这里就是…文书地狱啊。",
						"french": "C'est donc ça... l'enfer administratif.",
						"spanish": "Esto es... el infierno de la burocracia.",
						"vietnamese": "Đây là... địa ngục giấy tờ.",
						"thai": "นี่คือ... นรกเอกสารสินะ",
						"hindi": "यह है... कागज़ात का नर्क।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소멸 증명서… 대체 언제 나오는 거야!",
						"english": "Certificate of Annihilation... When will it be issued?!",
						"japanese": "消滅証明書…一体いつ発行されるんだ！",
						"chinese": "湮灭证明书…到底什么时候能出来啊！",
						"french": "Certificat d'annihilation... Quand sortira-t-il ?!",
						"spanish": "¡Certificado de aniquilación... cuándo saldrá!",
						"vietnamese": "Chứng nhận hủy diệt... Rốt cuộc khi nào mới có đây!",
						"thai": "ใบรับรองการสลายร่าง... เมื่อไหร่จะได้ออกกันแน่!",
						"hindi": "विनाश का प्रमाण पत्र... आख़िर कब मिलेगा!"
					},
					"emotion": "angry",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "난 여기서 영원히 갇혀있을 순 없어…!",
						"english": "I can't be trapped here forever...!",
						"japanese": "ここに永遠に閉じ込められてるわけにはいかない…！",
						"chinese": "我不能永远被困在这里…！",
						"french": "Je ne peux pas rester piégé ici pour toujours… !",
						"spanish": "¡No puedo estar atrapado aquí para siempre...!",
						"vietnamese": "Tôi không thể bị mắc kẹt ở đây mãi được...!",
						"thai": "ฉันจะถูกขังอยู่ที่นี่ตลอดไปไม่ได้...!",
						"hindi": "मैं यहाँ हमेशा के लिए फँसा नहीं रह सकता…!"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "drox",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 지옥 시스템은 미쳤어. 규칙이 시도 때도 없이 바뀌어!",
						"english": "This hellish system is insane. The rules change constantly!",
						"japanese": "この地獄のシステムは狂ってる。規則がしょっちゅう変わるんだ！",
						"chinese": "这个地狱系统疯了。规则随时都在变！",
						"french": "Ce système infernal est fou. Les règles changent tout le temps !",
						"spanish": "Este sistema infernal está loco. ¡Las reglas cambian a cada rato!",
						"vietnamese": "Hệ thống địa ngục này thật điên rồ. Quy tắc thay đổi liên tục!",
						"thai": "ระบบนรกนี่มันบ้าสิ้นดี กฎเปลี่ยนตลอดเวลา!",
						"hindi": "यह नर्क का सिस्टम पागल है। नियम हर समय बदलते रहते हैं!"
					},
					"emotion": "angry",
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "규칙이 바뀐다고?",
						"english": "Rules are changing?",
						"japanese": "ルールが変わるって？",
						"chinese": "规则要变了？",
						"french": "Les règles changent ?",
						"spanish": "¿Las reglas están cambiando?",
						"vietnamese": "Quy tắc thay đổi à?",
						"thai": "กฎกำลังเปลี่ยนเหรอ?",
						"hindi": "नियम बदल रहे हैं क्या?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "어제는 이렇게 해라, 오늘은 저렇게 해라… 내 기록도 엉망이야.",
						"english": "Yesterday it was this, today it's that... My records are all messed up.",
						"japanese": "昨日はこれ、今日はあれ… 僕の記録もめちゃくちゃだよ。",
						"chinese": "昨天这样，今天那样……我的记录也一团糟。",
						"french": "Hier c'était ça, aujourd'hui c'est ceci... Mes dossiers sont un gâchis.",
						"spanish": "Ayer era esto, hoy es aquello... Mis registros también están un desastre.",
						"vietnamese": "Hôm qua thế này, hôm nay thế kia... Hồ sơ của tôi cũng lộn xộn hết rồi.",
						"thai": "เมื่อวานแบบนี้ วันนี้แบบนั้น... บันทึกของฉันก็เละเทะไปหมดแล้ว",
						"hindi": "कल ऐसा, आज वैसा... मेरे रिकॉर्ड्स भी खराब हो गए हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 시간이 제멋대로 흐르는 것 같아.",
						"english": "It's as if... time is flowing on its own.",
						"japanese": "まるで…時間が勝手に流れているみたいだ。",
						"chinese": "就好像……时间在随意流逝。",
						"french": "C'est comme si... le temps s'écoulait n'importe comment.",
						"spanish": "Es como si... el tiempo fluyera a su antojo.",
						"vietnamese": "Cứ như là... thời gian trôi đi một cách tùy tiện vậy.",
						"thai": "เหมือนกับ... เวลาไหลไปตามอำเภอใจ",
						"hindi": "जैसे... समय मनमानी तरीके से बह रहा है।"
					},
					"emotion": "sad",
					"speaker": "drox"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "혹시… '메모'라는 자를 아십니까?",
						"english": "By any chance... do you know someone named 'Memo'?",
						"japanese": "もしかして…「メモ」という者をご存知ですか？",
						"chinese": "请问……您认识一个叫“Memo”的人吗？",
						"french": "Par hasard... connaissez-vous quelqu'un nommé 'Memo' ?",
						"spanish": "¿Por casualidad... conoce a alguien llamado 'Memo'?",
						"vietnamese": "Không biết... anh có biết người tên 'Memo' không?",
						"thai": "คุณรู้จักคนชื่อ 'เมโม' ไหม?",
						"hindi": "क्या आप... 'मेमो' नाम के किसी व्यक्ति को जानते हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "메모? 아, 옛날에 여기서 일하던 녀석이지.",
						"english": "Memo? Oh, that guy who used to work here a long time ago.",
						"japanese": "メモ？ああ、昔ここで働いていたやつか。",
						"chinese": "Memo？啊，是以前在这里工作的那个家伙啊。",
						"french": "Memo ? Ah, c'est le gars qui travaillait ici autrefois.",
						"spanish": "¿Memo? Ah, el tipo que solía trabajar aquí hace mucho tiempo.",
						"vietnamese": "Memo à? À, cái gã ngày xưa từng làm ở đây mà.",
						"thai": "เมโม? อ้อ ไอ้หมอนั่นที่เคยทำงานที่นี่เมื่อนานมาแล้วนี่",
						"hindi": "मेमो? ओह, वो लड़का जो पहले यहां काम करता था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상한 소포를 짊어지고… 모종의 사고 후에 사라졌어.",
						"english": "He was carrying a strange package... and disappeared after some kind of accident.",
						"japanese": "奇妙な小包を背負って…ある種の事故の後、姿を消した。",
						"chinese": "他背着一个奇怪的包裹……在某种事故后消失了。",
						"french": "Il portait un étrange colis... et a disparu après une sorte d'accident.",
						"spanish": "Llevaba un paquete extraño... y desapareció después de algún tipo de accidente.",
						"vietnamese": "Mang theo một bưu kiện kỳ lạ... và biến mất sau một tai nạn nào đó.",
						"thai": "เขาแบกพัสดุแปลกๆ... แล้วก็หายไปหลังจากเกิดอุบัติเหตุบางอย่าง",
						"hindi": "वह एक अजीब पैकेज ले जा रहा था... और किसी दुर्घटना के बाद गायब हो गया।"
					},
					"emotion": "sad",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "그때부터 지옥 규칙이 더 이상해진 것 같기도 하고.",
						"english": "Since then, the rules of hell seem to have become even stranger.",
						"japanese": "それから、地獄のルールがもっとおかしくなった気もするし。",
						"chinese": "从那时起，地狱的规则似乎变得更奇怪了。",
						"french": "Depuis, les règles de l'enfer semblent être devenues encore plus étranges.",
						"spanish": "Desde entonces, las reglas del infierno parecen haberse vuelto aún más extrañas.",
						"vietnamese": "Cũng có thể từ lúc đó mà các quy tắc của địa ngục trở nên kỳ lạ hơn.",
						"thai": "ตั้งแต่นั้นมา กฎของนรกก็ดูเหมือนจะแปลกประหลาดยิ่งขึ้นไปอีก",
						"hindi": "तब से, नरक के नियम और भी अजीब हो गए हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "drox"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "여기는 빠져나갈 수 없어. 서류는 쌓이고, 희망은 사라져.",
						"english": "There's no escape from here. Papers pile up, hope vanishes.",
						"japanese": "ここからは抜け出せない。書類は積み上がり、希望は消えていく。",
						"chinese": "这里无法逃脱。文件堆积如山，希望正在消失。",
						"french": "On ne peut pas s'échapper d'ici. Les dossiers s'accumulent, l'espoir disparaît.",
						"spanish": "No hay escape de aquí. Los papeles se amontonan, la esperanza se desvanece.",
						"vietnamese": "Không thể thoát khỏi đây. Hồ sơ chồng chất, hy vọng tan biến.",
						"thai": "ที่นี่ไม่มีทางหนีพ้น เอกสารกองพะเนิน ความหวังก็หายไป",
						"hindi": "यहां से निकलना असंभव है। कागजात जमा होते रहते हैं, उम्मीद गायब हो जाती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너희도… 결국 같은 신세가 될 거야.",
						"english": "You all... will eventually share the same fate.",
						"japanese": "お前たちも…結局同じ境遇になるだろう。",
						"chinese": "你们也……最终会落得同样的下场。",
						"french": "Vous aussi... finirez par être dans la même situation.",
						"spanish": "Ustedes también... acabarán en la misma situación.",
						"vietnamese": "Các người cũng... cuối cùng sẽ chịu chung số phận thôi.",
						"thai": "พวกคุณก็... สุดท้ายก็จะเจอชะตากรรมเดียวกัน",
						"hindi": "तुम भी... आखिरकार उसी स्थिति में आ जाओगे।"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 여기서 멈추지 않아.",
						"english": "We won't stop here.",
						"japanese": "私たちはここで止まらない。",
						"chinese": "我们不会止步于此。",
						"french": "Nous ne nous arrêterons pas ici.",
						"spanish": "No nos detendremos aquí.",
						"vietnamese": "Chúng tôi sẽ không dừng lại ở đây.",
						"thai": "เราจะไม่หยุดแค่นี้",
						"hindi": "हम यहां नहीं रुकेंगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무엇이든 밝혀낼 거야.",
						"english": "I'll uncover everything.",
						"japanese": "何でも暴いてやる。",
						"chinese": "我会查明一切。",
						"french": "Je vais tout découvrir.",
						"spanish": "Lo descubriré todo.",
						"vietnamese": "Ta sẽ khám phá mọi thứ.",
						"thai": "ฉันจะเปิดเผยทุกสิ่ง",
						"hindi": "मैं सब कुछ उजागर करूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 결국 너희도 영원히 갇히게 될 운명.",
						"english": "Fools... your fate is eternal confinement.",
						"japanese": "愚かな者たち… 結局お前たちも永遠に閉じ込められる運命だ。",
						"chinese": "愚蠢的东西… 最终你们也将永远被困。",
						"french": "Imbéciles... Vous aussi êtes destinés à être piégés éternellement.",
						"spanish": "Estúpidos... Vosotros también estáis destinados a ser atrapados para siempre.",
						"vietnamese": "Lũ ngu ngốc... Cuối cùng các ngươi cũng sẽ bị giam cầm vĩnh viễn.",
						"thai": "เจ้าพวกโง่... สุดท้ายพวกเจ้าก็จะต้องติดอยู่ในนี้ตลอดไป",
						"hindi": "मूर्खों... अंततः तुम भी हमेशा के लिए फँसने वाले हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지연된 심판 속에서 고통받아라.",
						"english": "Endure the agony of deferred judgment.",
						"japanese": "遅延された審判の中で苦しめ。",
						"chinese": "在延迟的审判中受苦吧。",
						"french": "Souffrez dans un jugement différé.",
						"spanish": "Sufrid en un juicio aplazado.",
						"vietnamese": "Hãy chịu đựng trong sự phán xét bị trì hoãn.",
						"thai": "จงทนทุกข์ทรมานในการพิพากษาที่ล่าช้า",
						"hindi": "विलंबित न्याय में पीड़ा सहो।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어… 우린 포기하지 않아!",
						"english": "It's not over yet... We won't give up!",
						"japanese": "まだ終わってない… 私たちは諦めない！",
						"chinese": "还没结束… 我们不会放弃！",
						"french": "Ce n'est pas encore fini... Nous n'abandonnerons pas !",
						"spanish": "Aún no ha terminado... ¡No nos rendiremos!",
						"vietnamese": "Chưa kết thúc đâu... Chúng tôi sẽ không bỏ cuộc!",
						"thai": "ยังไม่จบ... เราไม่ยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है... हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged from the darkness.",
						"japanese": "闇の中から巨大な影が現れた。",
						"chinese": "一个巨大的影子从黑暗中浮现。",
						"french": "Une ombre colossale émergea des ténèbres.",
						"spanish": "Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện từ bóng đêm.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืด",
						"hindi": "अंधेरे से एक विशाल परछाई उभरी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니… 제법이군.",
						"english": "To come this far... Impressive.",
						"japanese": "ここまで来るとは…大したものだ。",
						"chinese": "能走到这里…干得不错。",
						"french": "Arriver jusqu'ici... Pas mal.",
						"spanish": "Llegar hasta aquí... Impresionante.",
						"vietnamese": "Đến được đây... Cũng khá đấy.",
						"thai": "มาได้ถึงขนาดนี้... ไม่เลวเลยนี่",
						"hindi": "यहाँ तक पहुँचना... प्रभावशाली।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 더 이상은 안 돼. 서류 작업은 끝났다.",
						"english": "But no further. The paperwork is done.",
						"japanese": "だが、それ以上はさせない。書類仕事は終わりだ。",
						"chinese": "但不能再前进了。文件工作已经结束了。",
						"french": "Mais pas plus loin. Le travail de paperasse est terminé.",
						"spanish": "Pero no más allá. El papeleo ha terminado.",
						"vietnamese": "Nhưng không thể đi xa hơn nữa. Công việc giấy tờ đã xong.",
						"thai": "แต่จะไปต่อไม่ได้แล้ว งานเอกสารเสร็จสิ้นแล้ว",
						"hindi": "पर अब और नहीं। कागज़ का काम खत्म हो गया है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너야말로 끝이야. 비합리적인 규칙의 수호자!",
						"english": "No, *you* are done. Guardian of irrational rules!",
						"japanese": "終わるのは貴様だ。非合理な規則の守護者よ！",
						"chinese": "你才是完蛋了。不合理规则的守护者！",
						"french": "Non, c'est *toi* qui as terminé. Gardien des règles irrationnelles !",
						"spanish": "¡No, tú has terminado. Guardián de reglas irracionales!",
						"vietnamese": "Ngươi mới là kẻ kết thúc. Kẻ bảo vệ những quy tắc phi lý!",
						"thai": "แกต่างหากที่จบแล้ว ผู้พิทักษ์กฎไร้เหตุผล!",
						"hindi": "तुम खत्म हो। अतार्किक नियमों के संरक्षक!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 헛수고다….",
						"english": "Ugh... All for nothing...",
						"japanese": "くっ…無駄骨だったか…。",
						"chinese": "呃…白费力气了…",
						"french": "Ugh... Tout ça pour rien...",
						"spanish": "Ugh... Todo fue en vano...",
						"vietnamese": "Chết tiệt... Vô ích rồi...",
						"thai": "อึก...เปล่าประโยชน์จริงๆ...",
						"hindi": "उफ़… सब बेकार…।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 지옥의 시스템은… 너희가 상상도 못 할 만큼 거대해.",
						"english": "This hellish system... it's far vaster than you can imagine.",
						"japanese": "この地獄のシステムは…お前たちが想像もできないほど巨大だ。",
						"chinese": "这个地狱般的系统…比你们想象的还要庞大。",
						"french": "Ce système infernal... est bien plus vaste que vous ne pouvez l'imaginer.",
						"spanish": "Este sistema infernal... es mucho más vasto de lo que podéis imaginar.",
						"vietnamese": "Hệ thống địa ngục này... nó lớn hơn rất nhiều so với những gì các ngươi có thể tưởng tượng.",
						"thai": "ระบบนรกนี่...มันยิ่งใหญ่เกินกว่าที่พวกเจ้าจะจินตนาการได้",
						"hindi": "यह नारकीय प्रणाली… इतनी विशाल है कि तुम कल्पना भी नहीं कर सकते।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "메모… 그 소포… 녀석의 배달은 멈출 수 없을 거다.",
						"english": "The memo... that package... its delivery cannot be stopped.",
						"japanese": "メモ…あの小包…奴の配達は止められないだろう。",
						"chinese": "备忘录…那个包裹…它的递送是无法阻止的。",
						"french": "Le mémo... ce colis... sa livraison ne pourra être arrêtée.",
						"spanish": "El memorándum... ese paquete... su entrega no podrá ser detenida.",
						"vietnamese": "Bản ghi nhớ... cái bưu kiện đó... việc giao hàng của nó không thể bị chặn lại.",
						"thai": "บันทึก...พัสดุนั้น...การจัดส่งของมันจะหยุดไม่ได้",
						"hindi": "वह ज्ञापन… वह पार्सल… उसकी डिलीवरी रोकी नहीं जा सकती।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "메모의 배달… 도대체 무엇을 말하는 거지?",
						"english": "The memo's delivery... What on earth is it talking about?",
						"japanese": "メモの配達…一体何を言っているんだ？",
						"chinese": "备忘录的递送…到底在说什么？",
						"french": "La livraison du mémo... De quoi diable parle-t-il ?",
						"spanish": "La entrega del memorándum... ¿De qué diablos está hablando?",
						"vietnamese": "Việc giao bản ghi nhớ... Rốt cuộc là đang nói về cái gì?",
						"thai": "การจัดส่งบันทึก...กำลังพูดถึงอะไรกันแน่?",
						"hindi": "ज्ञापन की डिलीवरी… आखिर क्या बात कर रहा है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "지옥의 서류들은 잠시 숨을 죽였다.",
						"english": "The infernal paperwork held its breath for a moment.",
						"japanese": "地獄の書類たちは、一時的に息を潜めた。",
						"chinese": "地狱般的文书工作暂时平息了。",
						"french": "La paperasse infernale retint son souffle un instant.",
						"spanish": "El papeleo infernal contuvo el aliento por un momento.",
						"vietnamese": "Công việc giấy tờ địa ngục tạm thời ngừng lại.",
						"thai": "เอกสารนรกก็สงบลงชั่วขณะ",
						"hindi": "नरक के कागज़ात ने पल भर के लिए अपनी साँस रोकी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 어긋난 시간의 흔적들은 더 깊은 곳으로 향하고 있었다.",
						"english": "Yet, the distorted temporal echoes led deeper.",
						"japanese": "しかし、歪んだ時間の痕跡はより深い場所へと向かっていた。",
						"chinese": "然而，错乱的时间痕迹正指向更深处。",
						"french": "Pourtant, les traces du temps distordu menaient plus profondément.",
						"spanish": "Pero las huellas del tiempo distorsionado se dirigían a lo más profundo.",
						"vietnamese": "Tuy nhiên, dấu vết của thời gian sai lệch đang hướng sâu hơn.",
						"thai": "แต่ร่องรอยของเวลาที่บิดเบี้ยวได้มุ่งหน้าสู่ที่ลึกกว่านั้น",
						"hindi": "परन्तु, समय के विकृत निशान गहराई की ओर बढ़ रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 심장부로 향하는 길, 끝없는 서류 지옥에 도착했다.",
			"수많은 영혼들이 지연된 심판 속에서 고통받는 곳.",
			"그곳에서 우리는, 시스템의 비극적인 희생자를 만났다.",
			"그리고 그 뒤에 감춰진, 거대한 진실의 조각을 발견했다."
		],
		"english": [
			"On the way to the heart of hell, we arrived at the endless paperwork hell.",
			"Where countless souls suffer in delayed judgment.",
			"There, we met a tragic victim of the system.",
			"And behind it, we discovered a piece of a great truth."
		],
		"japanese": [
			"地獄の中心部へ向かう途中、無限の書類地獄にたどり着いた。",
			"無数の魂が、遅延された審判の中で苦しむ場所。",
			"そこで私たちは、システムの悲劇的な犠牲者に出会った。",
			"そしてその背後に隠された、巨大な真実の断片を発見した。"
		],
		"chinese": [
			"前往地狱深处的路上，我们抵达了无尽的文书地狱。",
			"无数灵魂在延迟的审判中受苦之地。",
			"在那里，我们遇到了一个系统的悲剧受害者。",
			"并在其背后，发现了一块巨大真相的碎片。"
		],
		"french": [
			"En chemin vers le cœur de l'enfer, nous sommes arrivés au purgatoire administratif sans fin.",
			"Où d'innombrables âmes souffrent dans un jugement retardé.",
			"Là, nous avons rencontré une victime tragique du système.",
			"Et derrière cela, nous avons découvert un fragment d'une grande vérité."
		],
		"spanish": [
			"En el camino al corazón del infierno, llegamos al interminable infierno burocrático.",
			"Donde incontables almas sufren en un juicio postergado.",
			"Allí, conocimos a una víctima trágica del sistema.",
			"Y detrás de ello, descubrimos un fragmento de una gran verdad."
		],
		"vietnamese": [
			"Trên đường đến trái tim địa ngục, chúng tôi đã đến vùng địa ngục giấy tờ vô tận.",
			"Nơi vô số linh hồn phải chịu đựng sự phán xét bị trì hoãn.",
			"Ở đó, chúng tôi đã gặp một nạn nhân bi thảm của hệ thống.",
			"Và đằng sau đó, chúng tôi đã phát hiện ra một mảnh sự thật vĩ đại."
		],
		"thai": [
			"ระหว่างทางสู่ใจกลางนรก เรามาถึงนรกเอกสารอันไม่มีที่สิ้นสุด",
			"ที่ซึ่งวิญญาณนับไม่ถ้วนทรมานอยู่ในการพิพากษาที่ล่าช้า",
			"ณ ที่นั้น เราได้พบเหยื่อผู้โชคร้ายของระบบ",
			"และเบื้องหลังนั้น เราได้ค้นพบชิ้นส่วนของความจริงอันยิ่งใหญ่"
		],
		"hindi": [
			"नर्क के हृदय तक जाने के मार्ग में, हम अंतहीन कागज़ात के नर्क में पहुँच गए।",
			"जहाँ असंख्य आत्माएँ विलंबित न्याय में पीड़ित हैं।",
			"वहाँ, हम सिस्टम के एक दुखद शिकार से मिले।",
			"और उसके पीछे, हमने एक महान सत्य का एक अंश खोजा।"
		]
	}
} as const;
